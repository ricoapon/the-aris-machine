import {Component, EventEmitter} from '@angular/core';
import {PlaygroundEvent, SquareColor} from "./playground/playground.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humans-clone';
  playgroundEmitter = new EventEmitter<PlaygroundEvent>();

  execute(input: any) {
    this.playgroundEmitter.emit({
      i: parseInt(input),
      j: 1,
      color: SquareColor.BLUE
    })
  }
}
