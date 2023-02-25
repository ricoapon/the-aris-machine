import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {concatMap, from, of} from "rxjs";
import { delay } from "rxjs/operators";

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
export class SvgGridComponent implements SvgGrid{
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

  execute(fnList: ((svgGrid: SvgGrid) => void)[]) {
    if (fnList.length == 0) {
      return
    }
    
    // The trick to add delays in between also applies to the first element. So we do this one manually.
    fnList[0](this)
    fnList.shift()
    from(fnList).pipe(concatMap(item => of(item).pipe(delay(1000))))
      .subscribe((fn: (svgGrid: SvgGrid) => void) => {
        fn(this);
      });
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
  copyMemoryToSlot(i: number): void {
    if (this.memory != undefined) {
      this.memorySlots[i] = this.memory
      this.memory = undefined
    }
  }

  start() {
    this.execute([
      (svgGrid: SvgGrid) => {svgGrid.moveInputToMemory()},
      (svgGrid: SvgGrid) => {svgGrid.moveMemoryToOutput()}
    ])
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

interface SvgGrid {
  moveInputToMemory(): void;

  moveMemoryToOutput(): void;

  copyMemoryToSlot(i: number): void;
}
