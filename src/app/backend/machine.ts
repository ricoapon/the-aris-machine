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
      this.guiActions.push((machineGUI) => machineGUI.error('Cannot read from input anymore'))
      return false
    }

    const expectedOutNumber = this.expectedOut.shift()
    if (expectedOutNumber != this.input[0]) {
      this.guiActions.push((machineGUI) => machineGUI.error('Output is not correct'))
      return false
    }

    this.guiActions.push((machineGUI) => machineGUI.shiftInput())
    // @ts-ignore
    this.guiActions.push((machineGUI) => machineGUI.addToOutput(this.input.shift()))

    if (this.expectedOut.length == 0) {
      this.guiActions.push((machineGUI) => machineGUI.finished())
      return true
    }
  }

  moveInputToMemorySlot(i: number): boolean | void {
    if (this.input.length == 0) {
      this.guiActions.push((machineGUI) => machineGUI.error('Cannot read from input anymore'))
      return false
    }
    this.memorySlots[i] = this.input.shift()
    this.guiActions.push((machineGUI) => machineGUI.shiftInput())
    this.guiActions.push((machineGUI) => machineGUI.setMemorySlotValue(i, this.memorySlots[i]))
  }

  moveMemorySlotToOutput(i: number): boolean | void {
    if (this.memorySlots[i] == undefined) {
      this.guiActions.push((machineGUI) => machineGUI.error('No value to move to output'))
      return false
    }

    const expectedOutNumber = this.expectedOut.shift()
    if (expectedOutNumber != this.memorySlots[i]) {
      this.guiActions.push((machineGUI) => machineGUI.error('Output is not correct'))
      return false
    }

    // @ts-ignore
    this.guiActions.push((machineGUI) => machineGUI.addToOutput(this.memorySlots[i]))
    this.guiActions.push((machineGUI) => machineGUI.setMemorySlotValue(i, undefined))
    this.memorySlots[i] = undefined

    if (this.expectedOut.length == 0) {
      this.guiActions.push((machineGUI) => machineGUI.finished())
      return true
    }
  }

  moveMemorySlotToMemorySlot(from: number, to: number): boolean | void {
    if (this.memorySlots[from] == undefined) {
      this.guiActions.push((machineGUI) => machineGUI.error('No value to move to memory slot ' + to))
      return false
    }

    this.memorySlots[to] = this.memorySlots[from]
    this.memorySlots[from] = undefined
    this.guiActions.push((machineGUI) => machineGUI.setMemorySlotValue(to, this.memorySlots[to]))
    this.guiActions.push((machineGUI) => machineGUI.setMemorySlotValue(from, undefined))
  }

  copyMemorySlotToMemorySlot(from: number, to: number): boolean | void {
    if (this.memorySlots[from] == undefined) {
      this.guiActions.push((machineGUI) => machineGUI.error('No value to move to memory slot ' + to))
      return false
    }

    this.memorySlots[to] = this.memorySlots[from]
    this.guiActions.push((machineGUI) => machineGUI.setMemorySlotValue(to, this.memorySlots[to]))
  }

  checkWinningCondition(): boolean {
    if (this.expectedOut.length != 0) {
      this.guiActions.push((machineGUI) => machineGUI.error('Output is not correct'))
      return false
    }

    this.guiActions.push((machineGUI) => machineGUI.finished())
    return true
  }

  addMemorySlotToMemorySlot(from: number, to: number): boolean | void {
    if (this.memorySlots[from] == undefined || this.memorySlots[to] == undefined) {
      this.guiActions.push((machineGUI) => machineGUI.error('No value to move to memory slot ' + to))
      return false
    }

    // @ts-ignore
    this.memorySlots[to] += this.memorySlots[from]
    this.guiActions.push((machineGUI) => machineGUI.setMemorySlotValue(to, this.memorySlots[to]))
  }
}

export interface MachineGUI {
  detectChanges(): void;
  initialize(level: Level): void;
  shiftInput(): void;
  addToOutput(value: number): void;
  setMemorySlotValue(i: number, value: number | undefined): void;
  error(message: string): boolean;
  finished(): boolean;
}
