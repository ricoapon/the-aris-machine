import {Component} from '@angular/core';
import {MachineGuiExecutor} from "../../backend/machine-gui-executor";
import {MonacoVariables, MonacoVariablesFactory} from "../../monaco-config/global";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  readonly monacoVariables: MonacoVariables;
  readonly options: any;
  content = '';

  constructor(private machineGuiExecutor: MachineGuiExecutor, private monacoVariablesFactory: MonacoVariablesFactory) {
    this.monacoVariables = monacoVariablesFactory.get()
    this.options = this.monacoVariables.createMonacoEditorOptions();

    this.machineGuiExecutor.setDetermineCode(() => {
      return this.content
    })

    this.monacoVariables.observableMonacoFinishedInitializing().subscribe(() => {
      this.monacoVariables.getMonacoEditor(this.options).addCommand(this.monacoVariables.KeyMod().CtrlCmd | this.monacoVariables.KeyCode().Enter, () => {
        this.execute()
      })
    })
  }

  execute() {
    if (this.machineGuiExecutor.isRunning()) {
      return
    }

    if (!this.machineGuiExecutor.hasActionsLeft()) {
      this.machineGuiExecutor.initialize()
      this.machineGuiExecutor.execute()
    } else {
      this.machineGuiExecutor.execute()
    }
  }
}
