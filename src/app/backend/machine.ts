import {Level} from "./levels";

export class Machine {
  input: number[];
  expectedOut: number[];
  memorySlots: (undefined | number)[];
  guiActions: ((machineGUI: MachineGUI) => void)[]

  constructor(level: Level) {
    // Clone arrays to make sure that we don't change the level object.
    this.input = [...level.input]
    this.expectedOut = [...level.expectedOut]
    this.memorySlots = []
    for (let i = 0; i < level.nrOfMemorySlots; i++) {
      this.memorySlots.push(undefined)
    }
    this.guiActions = []
  }

  moveInputToOutput(): boolean | void {
    if (this.input.length == 0) {
      return this.error('Cannot read from input anymore')
    }

    const expectedOutNumber = this.expectedOut.shift()
    if (expectedOutNumber != this.input[0]) {
      return this.error('Output is not correct')
    }

    this.handle({
      shiftInput: true,
      addValueToOutput: this.input.shift()
    })

    if (this.expectedOut.length == 0) {
      return this.finished()
    }
  }

  moveInputToMemorySlot(i: number): boolean | void {
    if (this.input.length == 0) {
      return this.error('Cannot read from input anymore')
    }
    this.memorySlots[i] = this.input.shift()
    this.handle({
      shiftInput: true,
      memory: [{
        index: i,
        value: this.memorySlots[i]
      }]
    })
  }

  moveMemorySlotToOutput(i: number): boolean | void {
    if (this.memorySlots[i] == undefined) {
      return this.error('No value to move to output')
    }

    const expectedOutNumber = this.expectedOut.shift()
    if (expectedOutNumber != this.memorySlots[i]) {
      return this.error('Output is not correct')
    }

    // @ts-ignore
    this.handle({
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

  moveMemorySlotToMemorySlot(from: number, to: number): boolean | void {
    if (this.memorySlots[from] == undefined) {
      return this.error('No value to move to memory slot ' + to)
    }

    this.memorySlots[to] = this.memorySlots[from]
    this.memorySlots[from] = undefined
    this.handle({
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

  copyMemorySlotToMemorySlot(from: number, to: number): boolean | void {
    if (this.memorySlots[from] == undefined) {
      return this.error('No value to move to memory slot ' + to)
    }

    this.memorySlots[to] = this.memorySlots[from]
    this.handle({
      memory: [{
        index: to,
        value: this.memorySlots[to]
      }]
    })
  }

  checkWinningCondition(): boolean {
    if (this.expectedOut.length != 0) {
      return this.error('More output is expected!')
    }

    return this.finished()
  }

  addMemorySlotToMemorySlot(from: number, to: number): boolean | void {
    if (this.memorySlots[from] == undefined || this.memorySlots[to] == undefined) {
      return this.error('No value to move to memory slot ' + to)
    }

    // @ts-ignore
    this.memorySlots[to] += this.memorySlots[from]
    this.handle({
      memory: [{
        index: to,
        value: this.memorySlots[to]
      }]
    })
  }

  private handle(machineGUIAction: MachineGUIAction): void {
    this.guiActions.push((machineGUI) => machineGUI.handle(machineGUIAction))
  }

  private error(message: string): boolean {
    this.guiActions.push((machineGUI) => machineGUI.handle({error: message}))
    return false
  }

  private finished(): boolean {
    this.guiActions.push((machineGUI) => machineGUI.handle({finished: true}))
    return true
  }
}

export interface MachineGUI {
  detectChanges(): void;

  initialize(level: Level): void;

  handle(machineGUIAction: MachineGUIAction): void;
}

export type MachineGUIAction = {
  shiftInput?: boolean,
  addValueToOutput?: number,
  // I am not sure how this could be done different (like index: value). This worked.
  memory?: { index: number, value: number | undefined }[]
  error?: string,
  finished?: boolean,
}
