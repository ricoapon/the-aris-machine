import {ChangeDetectorRef, Component} from '@angular/core';
import {MachineGUI, MachineGUIAction} from "../../backend/machine";
import {Level} from "../../backend/levels";

@Component({
  selector: 'app-machine-screen',
  templateUrl: './machine-screen.component.html',
  styleUrls: ['./machine-screen.component.css']
})
export class MachineScreenComponent implements MachineGUI {
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

  handle(machineGUIAction: MachineGUIAction): void {
    if (machineGUIAction.finished == true) {
      this.finished()
      return
    } else if (machineGUIAction.error != undefined) {
      this.error(machineGUIAction.error)
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
      this.output.push(machineGUIAction.addValueToOutput)
    }
  }
}
