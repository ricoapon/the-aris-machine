import {ChangeDetectorRef, Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {Level} from "../backend/levels";
import {MachineGUI} from "../backend/machine";

@Component({
  selector: 'app-svg-grid',
  templateUrl: './svg-grid.component.html',
  styleUrls: ['./svg-grid.component.css'],
  animations: [
    trigger('moveUp', [
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms', style({opacity: 0})),
      ]),
      transition(':enter', [
        style({display: 'none'}),
        animate('500ms', style({display: 'none'})),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms', style({opacity: 1})),
      ]),
    ]),
    trigger('fadeOut', [
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms', style({opacity: 0})),
      ]),
    ])
  ]
})
export class SvgGridComponent implements MachineGUI {
  input: number[];
  output: number[];
  memory: number | undefined;
  memorySlots: (number | undefined)[];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    // Add some values so the HTML stuff doesn't break.
    this.input = []
    this.output = []
    this.memory = undefined
    this.memorySlots = []
  }

  detectChanges(): void {
    this.changeDetectorRef.detectChanges()
  }

  initialize(level: Level): void {
    // Clone the array to make sure no changes from the outside affect this class.
    this.input = [...level.input]
    this.output = [];
    this.memory = undefined;
    this.memorySlots = [];
    for (let i = 0; i < level.nrOfMemorySlots; i++) {
      this.memorySlots.push(undefined)
    }
  }

  moveMemoryToMemorySlot(i: number): void {
    this.memorySlots[i] = this.memory
    this.memory = undefined
  }

  addMemorySlotToMemory(i: number): void {
    // @ts-ignore
    this.memory += this.memorySlots[i]
  }

  error(message: string): boolean {
    alert(message)
    return false
  }

  finished(): boolean {
    alert('Finished!')
    return true;
  }

  moveInputToMemory() {
    this.memory = this.input[0]
    this.input.shift()
  }

  moveMemoryToOutput() {
    if (this.memory != undefined) {
      this.output.push(this.memory)
      this.memory = undefined
    }
  }
}
