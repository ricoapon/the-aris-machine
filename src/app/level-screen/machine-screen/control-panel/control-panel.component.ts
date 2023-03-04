import {AfterViewInit, ChangeDetectorRef, Component, Input} from '@angular/core';
import {MachineGuiExecutor} from "../../../backend/machine-gui-executor";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements AfterViewInit {
  @Input() machineGuiExecutor: MachineGuiExecutor;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  isRunning(): boolean {
    return this.machineGuiExecutor != undefined && this.machineGuiExecutor.isRunning()
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges()
  }

}
