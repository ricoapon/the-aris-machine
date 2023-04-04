import {Component} from '@angular/core';
import {MachineGuiExecutor} from "../../../backend/machine-gui-executor";
import {MyCookieService} from "../../../my-cookie-service";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  speedUpFactor: number;

  constructor(private machineGuiExecutor: MachineGuiExecutor, private myCookieService: MyCookieService) {
    this.speedUpFactor = this.myCookieService.getSpeedUpFactor()
  }

  canBeStopped(): boolean {
    return this.machineGuiExecutor.hasActionsLeft();
  }

  canBeStarted(): boolean {
    return !this.machineGuiExecutor.isRunning()
  }

  isFinished(): boolean {
    return !this.machineGuiExecutor.hasActionsLeft()
  }

  stop() {
    this.machineGuiExecutor.stopAndClear()
  }

  start() {
    if (this.machineGuiExecutor.isRunning()) {
      return
    }

    if (!this.machineGuiExecutor.hasActionsLeft()) {
      this.machineGuiExecutor.initialize()
    }
    this.machineGuiExecutor.execute()
  }

  singleStep() {
    if (!this.machineGuiExecutor.hasActionsLeft()) {
      this.machineGuiExecutor.initialize()
    }
    if (this.machineGuiExecutor.isRunning()) {
      this.machineGuiExecutor.pause()
    }
    this.machineGuiExecutor.singleStep()
  }

  updateSpeedupFactor(factor: number) {
    this.speedUpFactor = factor
    this.myCookieService.setSpeedUpFactor(factor)
    // Start of slider means 1000ms delay and end of slider means 10ms delay.
    this.machineGuiExecutor.updateDelayInMs(1000 / factor)
  }
}
