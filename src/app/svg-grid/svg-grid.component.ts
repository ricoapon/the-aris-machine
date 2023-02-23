import { Component } from '@angular/core';
import {Coordinate} from "../backend/playground";

@Component({
  selector: 'app-svg-grid',
  templateUrl: './svg-grid.component.html',
  styleUrls: ['./svg-grid.component.css']
})
export class SvgGridComponent {
  intervals(): number[] {
    const result: number[] = []
    for (let i = 0; i <= 2000; i += 100) {
      result.push(i);
    }
    return result;
  }

  players(): any[] {
    return [{ids: [1, 2, 3], x: 5, y: 5}, {ids: [1], x: 12, y: 10}];
  }

  convertIdToColor(id: number): string {
    if (id == 1) {
      return "blue";
    } else if (id == 2) {
      return "red"
    } else if (id == 3) {
      return "purple"
    }

    return "black";
  }

  walls(): Coordinate[] {
    const result: Coordinate[] = [];

    for (let x = 0; x < 20; x++) {
      result.push({x: x, y: 0})
    }
    for (let x = 0; x < 20; x++) {
      result.push({x: x, y: 19})
    }
    for (let y = 1; y < 20 - 1; y++) {
      result.push({x: 0, y: y})
    }
    for (let y = 1; y < 20 - 1; y++) {
      result.push({x: 19, y: y})
    }

    return result;
  }

  pits(): Coordinate[] {
    return [{x: 1, y:2}];
  }
}
