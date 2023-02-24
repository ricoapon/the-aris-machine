import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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
export class SvgGridComponent {
  private readonly startingPosition: StartingPosition;
  input: number[];
  output: number[];
  memory: number | undefined;
  memorySlots: (number | undefined)[];

  constructor() {
    this.startingPosition = new StartingPosition([6, 6, 9, -3, 0, 0], [6, 0], 3)
    this.input = this.startingPosition.input
    this.memorySlots = [];
    for (let i = 0; i < this.startingPosition.memorySlots; i++) {
      this.memorySlots.push(undefined)
    }
    this.output = [];
    this.memory = undefined;
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

  copyMemoryToSlotOne() {
    if (this.memory != undefined) {
      this.memorySlots[0] = this.memory
      this.memory = undefined
    }
  }
}

class StartingPosition {
  input: number[];
  expectedOut: number[];
  memorySlots: number;

  constructor(input: number[], expectedOut: number[], memorySlots: number) {
    this.input = input;
    this.expectedOut = expectedOut;
    this.memorySlots = memorySlots;
  }
}
