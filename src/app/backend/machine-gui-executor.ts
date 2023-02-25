import {MachineGUI} from "./machine";
import {concatMap, from, of} from "rxjs";
import {delay} from "rxjs/operators";
import {Level} from "./levels";

export class MachineGuiExecutor {
  private readonly level: Level;
  private readonly machineGUI: MachineGUI;

  constructor(level: Level, machineGUI: MachineGUI) {
    this.level = level;
    this.machineGUI = machineGUI;
  }

  execute(actions: ((machineGUI: MachineGUI) => void)[]) {
    this.machineGUI.initialize(this.level)
    this.machineGUI.detectChanges()

    if (actions.length == 0) {
      return
    }

    // The trick to add delays in between also applies to the first element. So we do this one manually.
    this.callMethod(actions[0])
    actions.shift()
    const subscribe = from(actions).pipe(concatMap(item => of(item).pipe(delay(1000))))
      .subscribe((fn: (machineGUI: MachineGUI) => void) => {
        const continueMethods = this.callMethod(fn)
        if (continueMethods != undefined) {
          subscribe.unsubscribe()
        }
      });
  }

  private callMethod(fn: (machineGUI: MachineGUI) => void | boolean): boolean | void {
    const result = fn(this.machineGUI);
    this.machineGUI.detectChanges()
    if (result != undefined) {
      return result;
    }
  }
}
