import {Component, ViewEncapsulation} from '@angular/core';
import {MachineGuiExecutor} from "../../backend/machine-gui-executor";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent {
  content = 'move input to 0\nmove 0 to output\nmove input to 0\nmove 0 to output\nmove input to 0\nmove 0 to output\n';
  options = {
    value: this.content,
    // Let's just use a language that looks similar. Good enough for now, should be custom later.
    mode: 'javascript',
    // Essential!
    lineNumbers: true,
    // Maybe make this customizable later on.
    theme: 'humans',
    // Do not allow tabs at all. Everything should be spaces.
    extraKeys: {
      "Tab": function (cm: any) {
        cm.replaceSelection("  ", "end");
      },
      "Ctrl-Enter": this.execute(this)
    }
  }

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
