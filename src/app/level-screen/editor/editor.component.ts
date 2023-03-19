import {Component} from '@angular/core';
import {MachineGuiExecutor} from "../../backend/machine-gui-executor";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  content = 'move input to 0\nmove 0 to output\nmove input to 0\nmove 0 to output\nmove input to 0\nmove 0 to output\n';

  constructor(private machineGuiExecutor: MachineGuiExecutor) {
    this.machineGuiExecutor.setDetermineCode(() => {
      return this.content
    })
  }

  // A bit of a hacky workaround with the this-object, but I didn't know how else to get this to work.
  execute(_this: any) {
    return () => {
      const machineGuiExecutor: MachineGuiExecutor = _this.machineGuiExecutor

      if (machineGuiExecutor.isRunning()) {
        return
      }

      if (!machineGuiExecutor.isReadyForExecution()) {
        machineGuiExecutor.initialize()
        machineGuiExecutor.execute()
      } else {
        machineGuiExecutor.execute()
      }
    }
  }
}
