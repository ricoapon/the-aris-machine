import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Playground} from "../backend/playground";

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
}
