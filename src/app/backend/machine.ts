import {Level} from "./levels";

export class Machine {
  input: number[];
  expectedOut: number[];
  memorySlots: (undefined | number)[];
  memory: undefined | number;
  guiActions: ((machineGUI: MachineGUI) => void)[]

  constructor(level: Level) {
    // Clone arrays to make sure that we don't change the level object.
    this.input = [...level.input]
    this.expectedOut = [...level.expectedOut]
    this.memorySlots = []
    for (let i = 0; i < level.nrOfMemorySlots; i++) {
      this.memorySlots.push(undefined)
    }
    this.memory = undefined
    this.guiActions = []
  }

  moveInputToMemory(): boolean {
    if (this.input.length == 0) {
      this.guiActions.push((machineGUI) => machineGUI.error('Cannot read from input anymore'))
      return false
    }
    this.memory = this.input[0]
    this.input.shift()
    this.guiActions.push((machineGUI) => machineGUI.moveInputToMemory())
    return true;
  }

  moveMemoryToOutput(): boolean {
    if (this.memory == undefined) {
      this.guiActions.push((machineGUI) => machineGUI.error('No memory to move to output'))
      return false
    }

    const expectedOutNumber = this.expectedOut.shift()
    if (expectedOutNumber != this.memory) {
      this.guiActions.push((machineGUI) => machineGUI.error('Output is not correct'))
      return false
    }

    this.guiActions.push((machineGUI) => machineGUI.moveMemoryToOutput())
    this.memory = undefined
    return true
  }

  checkWinningCondition(): boolean {
    if (this.expectedOut.length != 0) {
      this.guiActions.push((machineGUI) => machineGUI.error('Output is not correct'))
      return false
    }

    this.guiActions.push((machineGUI) => machineGUI.finished())
    return true
  }
}

export interface MachineGUI {
  detectChanges(): void;
  initialize(level: Level): void;
  moveInputToMemory(): void;
  moveMemoryToOutput(): void;
  moveMemoryToMemorySlot(i: number): void;
  addMemorySlotToMemory(i: number): void;
  error(message: string): boolean;
  finished(): boolean;
}
