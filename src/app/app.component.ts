import {Component} from '@angular/core';
import {Parser} from "./backend/parser";
import {Coordinate, Player, Playground} from "./backend/playground";
import {MyMap} from "./backend/my-map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humans-clone';
  playground = new Playground(20, 20, new MyMap<Player, Coordinate>([
    [new Player(1), {x: 10, y: 10}],
    [new Player(2), {x: 7, y: 7}],
  ]))

  execute(input: any) {
    new Parser(this.playground).parse(input)
  }
}
