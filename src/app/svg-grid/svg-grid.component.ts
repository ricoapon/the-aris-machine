import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Coordinate, Playground} from "../backend/playground";

@Component({
  selector: 'app-svg-grid',
  templateUrl: './svg-grid.component.html',
  styleUrls: ['./svg-grid.component.css']
})
export class SvgGridComponent implements OnInit {
  @Input() playground: Playground

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.playground.updateEmitter().subscribe(() => this.changeDetectorRef.detectChanges())
  }

  intervals(): number[] {
    const result: number[] = []
    for (let i = 0; i <= 2000; i += 100) {
      result.push(i);
    }
    return result;
  }

  players(): [{id: number, c: Coordinate}] {
    return this.playground.players()
  }

  blocks(): [{id: number, c: Coordinate}] {
    return this.playground.blocks()
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
    return this.playground.walls();
  }

  pits(): Coordinate[] {
    return this.playground.pits();
  }
}
