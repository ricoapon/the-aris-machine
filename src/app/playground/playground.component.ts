import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Input() input: EventEmitter<PlaygroundEvent>
  colors: SquareColor[][];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.colors = []
    for (let i = 0; i < 4; i++) {
      this.colors[i] = []
      for (let j = 0; j < 4; j++) {
        this.colors[i][j] = SquareColor.WHITE
      }
    }
  }

  ngOnInit(): void {
    this.input.subscribe((e) => {
      this.colors[e.i][e.j] = e.color
      // We change the array, but Angular does not see it needs to update the view. So we do this manually.
      this.changeDetectorRef.detectChanges()
    })
  }

  determineColorClass(i: number, j: number): string {
    return SquareColor[this.colors[i][j]].toLowerCase()
  }
}

export enum SquareColor {
  WHITE,
  BLUE,
  RED
}

export type PlaygroundEvent = {
  i: number,
  j: number,
  color: SquareColor
}
