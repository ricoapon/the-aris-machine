import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {MachineGUIAction} from "../../backend/machine";
import {Level} from "../../backend/levels";
import {MachineGUI, MachineGuiExecutor} from "../../backend/machine-gui-executor";

@Component({
  selector: 'app-machine-screen',
  templateUrl: './machine-screen.component.html',
  styleUrls: ['./machine-screen.component.css']
})
export class MachineScreenComponent implements MachineGUI {
  @Input() machineGuiExecutor: MachineGuiExecutor;
  input: number[];
  output: number[];
  memorySlots: (number | undefined)[];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    // Add some values so the HTML stuff doesn't break.
    this.input = []
    this.output = []
    this.memorySlots = []
  }

  detectChanges(): void {
    this.changeDetectorRef.detectChanges()
  }

  initialize(level: Level): void {
    // Clone the array to make sure no changes from the outside affect this class.
    this.input = [...level.input]
    this.output = [];
    this.memorySlots = [];
    for (let i = 0; i < level.nrOfMemorySlots; i++) {
      this.memorySlots.push(undefined)
    }
  }

  error(message: string): boolean {
    alert(message)
    return false
  }

  finished(): boolean {
    alert('Finished the level!')
    return true
  }

  handle(machineGUIAction: MachineGUIAction): boolean | void {
    if (machineGUIAction.finished == true) {
      this.finished()
      return true
    } else if (machineGUIAction.error != undefined) {
      this.error(machineGUIAction.error)
      return false
    }

    if (machineGUIAction.shiftInput == true) {
      this.input.shift()
    }
    if (machineGUIAction.memory != undefined) {
      machineGUIAction.memory.forEach((memorySlot) => {
        this.memorySlots[memorySlot.index] = memorySlot.value
      })
    }
    if (machineGUIAction.addValueToOutput != undefined) {
      // To make sure the output is shown in the correct order, we need to add at the start instead of at the end.
      this.output.unshift(machineGUIAction.addValueToOutput)
    }
  }
}
