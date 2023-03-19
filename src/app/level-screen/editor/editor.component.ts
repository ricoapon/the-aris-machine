import {Component} from '@angular/core';
import {MachineGuiExecutor} from "../../backend/machine-gui-executor";
import {
  GLOBAL_MONACO,
  MONACO_EDITOR,
  MONACO_EDITOR_OPTIONS,
  MONACO_EDITOR_VARIABLE_SET
} from "../../monaco-config/global";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  content = 'move input to 0\nmove 0 to output\nmove input to 0\nmove 0 to output\nmove input to 0\nmove 0 to output\n';
  options = MONACO_EDITOR_OPTIONS;

  constructor(private machineGuiExecutor: MachineGuiExecutor) {
    this.machineGuiExecutor.setDetermineCode(() => {
      return this.content
    })

    MONACO_EDITOR_VARIABLE_SET.subscribe(() => {
      const actualEditor = MONACO_EDITOR.getEditors()[0]
      actualEditor.addCommand(GLOBAL_MONACO.KeyMod.CtrlCmd | GLOBAL_MONACO.KeyCode.Enter, () => {
        this.execute()
      })
    })
  }

  execute() {
    if (this.machineGuiExecutor.isRunning()) {
      return
    }

    if (!this.machineGuiExecutor.isReadyForExecution()) {
      this.machineGuiExecutor.initialize()
      this.machineGuiExecutor.execute()
    } else {
      this.machineGuiExecutor.execute()
    }
  }
}
