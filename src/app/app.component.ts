import {Component} from '@angular/core';
import {Parser} from "./backend/parser";
import {Playground} from "./backend/playground";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humans-clone';
  playground = new Playground()

  execute(input: any) {
    new Parser(this.playground).parse(input)
  }
}
