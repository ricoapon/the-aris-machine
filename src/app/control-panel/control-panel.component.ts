import {Component, Input} from '@angular/core';
import {MachineGuiExecutor} from "../backend/machine-gui-executor";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Input() machineGuiExecutor: MachineGuiExecutor;


}
