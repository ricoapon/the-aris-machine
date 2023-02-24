import {Component} from '@angular/core';
import {Parser} from "./backend/parser";
import {Playground} from "./backend/playground";
import {LEVEL_1} from "./backend/levels/levels";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humans-clone';
  playground = new Playground(LEVEL_1)

  execute(input: any) {
    new Parser(this.playground).parse(input)
  }
}
