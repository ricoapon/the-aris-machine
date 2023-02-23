import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Player, Playground, PlaygroundTile} from "../backend/playground";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Input() playground: Playground

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }



  ngOnInit() {
    this.playground.updateEmitter().subscribe(() => this.changeDetectorRef.detectChanges())
  }

  collectionOneToN(n: number) {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(i);
    }
    return result;
  }

  players(elements: Set<PlaygroundTile>): Player[] {
    const result: Player[] = [];
    elements.forEach((value: PlaygroundTile) => {
      if (value instanceof Player) {
        result.push(value);
      }
    })
    return result;
  }
}
