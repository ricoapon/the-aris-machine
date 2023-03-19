import {Component} from '@angular/core';
import {NR_OF_SCENARIOS} from "./scenarios/scenarios";

@Component({
  selector: 'app-monaco-demo-overview',
  templateUrl: './monaco-demo-overview.component.html',
  styleUrls: ['./monaco-demo-overview.component.css']
})
export class MonacoDemoOverviewComponent {
  scenarioIds(): number[] {
    // Nice trick for getting the array [0...n].
    return Array(NR_OF_SCENARIOS).fill('').map((x, i) => i)
  }
}
