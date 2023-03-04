import {MachineGUIAction} from "./machine";
import {Level} from "./levels";

export class MachineGuiExecutor {
  private readonly level: Level;
  private readonly machineGUI: MachineGUI;
  // Variables that will change during execution.
  private timer: NodeJS.Timer
  private actions: MachineGUIAction[]
  private delayInMs: number;

  constructor(level: Level, machineGUI: MachineGUI, delayInMs: number = 1000) {
    this.level = level;
    this.machineGUI = machineGUI;
    this.delayInMs = delayInMs
  }

  initialize(actions: MachineGUIAction[]) {
    this.machineGUI.initialize(this.level)
    this.machineGUI.detectChanges()
    this.actions = actions
  }

  execute() {
    // The trick to add delays in between also applies to the first element. So we do this one manually.
    this.handleNext()
    this.executeDelayed()
  }

  isRunning(): boolean {
    return this.actions != undefined && this.actions.length > 0
  }

  updateDelayInMs(delayInMs: number) {
    stop()
    this.delayInMs = delayInMs
    this.executeDelayed()
  }

  singleStep() {
    if (this.timer != undefined) {
      throw Error("Cannot do single step while executor is running")
    }

    this.handleNext()
  }

  stop() {
    if (this.timer != undefined) {
      clearInterval(this.timer)
    }
  }

  private executeDelayed() {
    this.timer = setInterval(() => {
      this.handleNext()
    }, this.delayInMs)
  }

  private handleNext(): boolean | void {
    const action = this.actions.shift()
    if (action == undefined) {
      this.stop()
      return
    }

    const result = this.machineGUI.handle(action);
    this.machineGUI.detectChanges()
    if (result != undefined) {
      return result;
    }
  }
}

export interface MachineGUI {
  detectChanges(): void;

  initialize(level: Level): void;

  handle(machineGUIAction: MachineGUIAction): boolean | void;
}
