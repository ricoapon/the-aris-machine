import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Parser} from "./backend/parser";
import {Machine} from "./backend/machine";
import {Level, LEVEL_1} from "./backend/levels";
import {SvgGridComponent} from "./svg-grid/svg-grid.component";
import {MachineGuiExecutor} from "./backend/machine-gui-executor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  readonly level: Level = LEVEL_1;
  title = 'humans-clone';
  playground = new Machine(this.level)
  @ViewChild('svgGrid') svgGridComponent: SvgGridComponent;
  machineGuiExecutor: MachineGuiExecutor;

  ngAfterViewInit(): void {
    this.svgGridComponent.initialize(this.level)
    this.svgGridComponent.detectChanges()
    this.machineGuiExecutor = new MachineGuiExecutor(this.level, this.svgGridComponent)
  }

  execute(input: any) {
    const guiActions = new Parser(this.playground).parse(input)
    this.machineGuiExecutor.execute(guiActions)
  }
}
