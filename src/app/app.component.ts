import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Parser} from "./backend/parser";
import {Machine} from "./backend/machine";
import {Level, LEVEL_1, LEVEL_2} from "./backend/levels";
import {MachineGuiExecutor} from "./backend/machine-gui-executor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // readonly level: Level = LEVEL_2;
  // title = 'humans-clone';
  // machineGuiExecutor: MachineGuiExecutor;
  //
  // ngAfterViewInit(): void {
  //   this.svgGridComponent.initialize(this.level)
  //   this.svgGridComponent.detectChanges()
  //   this.machineGuiExecutor = new MachineGuiExecutor(this.level, this.svgGridComponent)
  // }
  //
  // execute(input: any) {
  //   const guiActions = new Parser(new Machine(this.level)).parse(input)
  //   this.machineGuiExecutor.execute(guiActions)
  // }
}
