import {Component} from '@angular/core';
import {MachineGuiExecutor} from "../../../backend/machine-gui-executor";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  speedUpFactor: number = 1;

  constructor(private machineGuiExecutor: MachineGuiExecutor) {
  }

  canBeStopped(): boolean {
    return this.machineGuiExecutor.isReadyForExecution();
  }

  canBeStarted(): boolean {
    return !this.machineGuiExecutor.isRunning()
  }

  isFinished(): boolean {
    return this.machineGuiExecutor.isFinished()
  }

  stop() {
    this.machineGuiExecutor.stopAndClear()
  }

  start() {
    if (this.machineGuiExecutor.isRunning()) {
      return
    }

    if (!this.machineGuiExecutor.isReadyForExecution()) {
      this.machineGuiExecutor.initialize()
    }
    this.machineGuiExecutor.execute()
  }

  singleStep() {
    if (!this.machineGuiExecutor.isReadyForExecution()) {
      this.machineGuiExecutor.initialize()
    }
    if (this.machineGuiExecutor.isRunning()) {
      this.machineGuiExecutor.pause()
    }
    this.machineGuiExecutor.singleStep()
  }

  updateDelay() {
    // Start of slider means 1000ms delay and end of slider means 10ms delay.
    this.machineGuiExecutor.updateDelayInMs(1000 - (this.speedUpFactor * 10))
  }
}
