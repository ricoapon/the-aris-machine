import {Component} from '@angular/core';

@Component({
  selector: 'app-svg-grid',
  templateUrl: './svg-grid.component.html',
  styleUrls: ['./svg-grid.component.css']
})
export class SvgGridComponent {
  private readonly startingPosition: StartingPosition;
  input: number[];
  output: number[];
  memory: number;
  memorySlots: number[];

  constructor() {
    this.startingPosition = new StartingPosition([6, 6, 9, -3, 0, 0], [6, 0], 3)
    this.input = this.startingPosition.input
    this.memorySlots = [];
    for (let i = 0; i < this.startingPosition.memorySlots; i++) {
      this.memorySlots.push(0)
    }
    this.output = [];
    this.memory = 0;
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
