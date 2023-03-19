import {Component} from '@angular/core';
import {MachineGuiExecutor} from "../../backend/machine-gui-executor";
import {
  createMonacoEditorOptions,
  getMonacoEditor,
  GLOBAL_MONACO,
  MONACO_EDITOR_VARIABLE_SET
} from "../../monaco-config/global";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  content = 'move input to 0\nmove 0 to output\nmove input to 0\nmove 0 to output\nmove input to 0\nmove 0 to output\n';
  options = createMonacoEditorOptions();

  constructor(private machineGuiExecutor: MachineGuiExecutor) {
    this.machineGuiExecutor.setDetermineCode(() => {
      return this.content
    })

    MONACO_EDITOR_VARIABLE_SET.subscribe(() => {
      getMonacoEditor(this.options).addCommand(GLOBAL_MONACO.KeyMod.CtrlCmd | GLOBAL_MONACO.KeyCode.Enter, () => {
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
