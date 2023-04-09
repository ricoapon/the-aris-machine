import {Level} from "../levels";
import {MachineGUIAction} from "./parse-result";

/** Contains all results that are available after running the code on the machine. */
export type MachineResult = {
  machineGUIActions: MachineGUIAction[]
  finishedWithError: boolean
}

enum MachineState {
  RUNNING,
  FINISHED,
  FINISHED_WITH_ERROR
}

/**
 * Represents the internal state of the level. Methods represent actions that are allowed on the level.
 * After all actions are executed, results can be gathered.
 */
export class Machine {
  input: number[]
  expectedOut: number[]
  memorySlots: (undefined | number)[]
  machineGUIActions: ProtectedArray<MachineGUIAction>
  machineState: MachineState

  constructor(level: Level) {
    // Clone arrays to make sure that we don't change the level object.
    this.input = [...level.input]
    this.expectedOut = [...level.expectedOut]
    this.memorySlots = []
    for (let i = 0; i < level.nrOfMemorySlots; i++) {
      this.memorySlots.push(undefined)
    }
    this.machineGUIActions = new ProtectedArray<MachineGUIAction>()
    this.machineState = MachineState.RUNNING
  }

  isRunning(): boolean {
    return this.machineState == MachineState.RUNNING
  }

  createMachineResult(): MachineResult {
    return {
      machineGUIActions: this.machineGUIActions.get(),
      finishedWithError: this.machineState == MachineState.FINISHED_WITH_ERROR
    }
  }

  getValueOfMemorySlot(i: number): number {
    const value = this.memorySlots[i]
    if (value == undefined) {
      this.error('Trying to read memory slot ' + i + ', but it is empty')
      return 0
    }
    return value
  }

  getValueOfInputElement(): number {
    return this.input[0]
  }

  moveInputToOutput(editorLine: number) {
    if (this.input.length == 0) {
      this.error('Cannot read from input anymore')
      return
    }

    const expectedOutNumber = this.expectedOut.shift()
    if (expectedOutNumber != this.input[0]) {
      this.error('Output is not correct')
      return
    }

    this.handle({
      editorLine: editorLine,
      shiftInput: true,
      addValueToOutput: this.input.shift()
    })

    if (this.expectedOut.length == 0) {
      this.finished()
    }
  }

  moveInputToMemorySlot(i: number, editorLine: number) {
    if (this.input.length == 0) {
      this.error('Cannot read from input anymore')
      return
    }
    this.memorySlots[i] = this.input.shift()
    this.handle({
      editorLine: editorLine,
      shiftInput: true,
      memory: [{
        index: i,
        value: this.memorySlots[i]
      }]
    })
  }

  moveMemorySlotToOutput(i: number, editorLine: number) {
    if (this.memorySlots[i] == undefined) {
      this.error('No value to move to output')
      return
    }

    const expectedOutNumber = this.expectedOut.shift()
    if (expectedOutNumber != this.memorySlots[i]) {
      this.error('Output is not correct')
      return
    }

    // @ts-ignore
    this.handle({
      editorLine: editorLine,
      addValueToOutput: this.memorySlots[i],
      memory: [{
        index: i,
        value: undefined
      }]
    })
    this.memorySlots[i] = undefined

    if (this.expectedOut.length == 0) {
      this.finished()
    }
  }

  moveMemorySlotToMemorySlot(from: number, to: number, editorLine: number) {
    if (this.memorySlots[from] == undefined) {
      this.error('No value to move to memory slot ' + to)
      return
    }

    this.memorySlots[to] = this.memorySlots[from]
    this.memorySlots[from] = undefined
    this.handle({
      editorLine: editorLine,
      memory: [
        {
          index: to,
          value: this.memorySlots[to]
        },
        {
          index: from,
          value: undefined
        }
      ]
    })
  }

  copyMemorySlotToMemorySlot(from: number, to: number, editorLine: number) {
    if (this.memorySlots[from] == undefined) {
      this.error('No value to move to memory slot ' + to)
      return
    }

    this.memorySlots[to] = this.memorySlots[from]
    this.handle({
      editorLine: editorLine,
      memory: [{
        index: to,
        value: this.memorySlots[to]
      }]
    })
  }

  copyMemorySlotToOutput(from: number, editorLine: number) {
    if (this.memorySlots[from] == undefined) {
      this.error('Memory slot ' + from + ' does not exist')
      return
    }

    const numberToCopyToOutput = this.memorySlots[from]
    const expectedOutNumber = this.expectedOut.shift()
    if (expectedOutNumber != numberToCopyToOutput) {
      this.error('Output is not correct')
      return
    }

    this.handle({
      editorLine: editorLine,
      addValueToOutput: numberToCopyToOutput
    })

    if (this.expectedOut.length == 0) {
      this.finished()
    }
  }

  incrementMemorySlot(i: number, editorLine: number) {
    if (this.memorySlots[i] == undefined) {
      this.error('Memory slot ' + i + ' does not exist')
      return
    }

    // @ts-ignore
    this.memorySlots[i]++

    this.handle({
      editorLine: editorLine,
      memory: [{
        index: i,
        value: this.memorySlots[i]
      }]
    })
  }

  decrementMemorySlot(i: number, editorLine: number) {
    if (this.memorySlots[i] == undefined) {
      this.error('Memory slot ' + i + ' does not exist')
      return
    }

    // @ts-ignore
    this.memorySlots[i]--

    this.handle({
      editorLine: editorLine,
      memory: [{
        index: i,
        value: this.memorySlots[i]
      }]
    })
  }

  checkWinningCondition() {
    if (this.expectedOut.length != 0) {
      this.error('More output is expected!')
    } else {
      this.finished()
    }
  }

  addMemorySlotToMemorySlot(from: number, to: number, editorLine: number) {
    if (this.memorySlots[from] == undefined || this.memorySlots[to] == undefined) {
      this.error('One of the two memory slots does not exist: ' + from + ", " + to)
      return
    }

    // @ts-ignore
    this.memorySlots[to] += this.memorySlots[from]
    this.handle({
      editorLine: editorLine,
      memory: [{
        index: to,
        value: this.memorySlots[to]
      }]
    })
  }


  subtractMemorySlotFromMemorySlot(valueToSubtract: number, toBeSubtractedFrom: number, editorLine: number) {
    if (this.memorySlots[valueToSubtract] == undefined || this.memorySlots[toBeSubtractedFrom] == undefined) {
      this.error('One of the two memory slots does not exist: ' + valueToSubtract + ", " + toBeSubtractedFrom)
      return
    }

    // @ts-ignore
    this.memorySlots[toBeSubtractedFrom] -= this.memorySlots[valueToSubtract]
    this.handle({
      editorLine: editorLine,
      memory: [{
        index: toBeSubtractedFrom,
        value: this.memorySlots[toBeSubtractedFrom]
      }]
    })
  }


  private handle(machineGUIAction: MachineGUIAction) {
    this.machineGUIActions.push(machineGUIAction)
  }

  private error(message: string) {
    this.machineGUIActions.push({error: message})
    this.machineState = MachineState.FINISHED_WITH_ERROR
    this.machineGUIActions.enableProtect()
  }

  private finished() {
    this.machineGUIActions.push({finished: true})
    this.machineState = MachineState.FINISHED
    this.machineGUIActions.enableProtect()
  }
}

/**
 * Encapsulates an array that protects it from adding new elements after `enableProtect` is called. This class is used to
 * protect the code from adding new actions after the actions are finished (either successfully or with an error).
 * This is a sure-way to protect the array with little modifications to the code.
 */
class ProtectedArray<T> {
  array: T[] = []
  protect = false

  push(...items: T[]): number {
    // Do not throw an error if the array is protected, so the program runs smoothly.
    if (this.protect) {
      return 0
    }
    return this.array.push(...items)
  }

  enableProtect() {
    this.protect = true
  }

  get(): T[] {
    return this.array;
  }
}
