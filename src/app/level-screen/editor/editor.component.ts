import {Component, Input, OnInit} from '@angular/core';
import {MachineEditor, MachineGuiExecutor} from "../../backend/machine-gui-executor";
import {MonacoVariables, MonacoVariablesFactory} from "../../monaco-config/global";
import {IRange} from "monaco-editor";
import {MyCookieService} from "../../my-cookie-service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements MachineEditor, OnInit {
  readonly monacoVariables: MonacoVariables;
  readonly options: any;
  @Input() levelId: number
  content = '';

  constructor(private machineGuiExecutor: MachineGuiExecutor,
              private monacoVariablesFactory: MonacoVariablesFactory,
              private myCookieService: MyCookieService) {
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

  ngOnInit(): void {
    this.content = this.myCookieService.getCodeForLevel(this.levelId)
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

  caretDecoration: any = undefined

  addCaret(lineNumber: number) {
    this.removeCaret()

    const monaco = this.monacoVariables.getMonacoEditor(this.options)
    const range: IRange = {
      startLineNumber: lineNumber,
      endLineNumber: lineNumber,
      startColumn: 1,
      endColumn: 1,
    }
    this.caretDecoration = monaco.createDecorationsCollection([
      {
        range: range,
        options: {
          linesDecorationsClassName: "caretGlyph"
        }
      },
    ]);
  }

  removeCaret() {
    if (this.caretDecoration != undefined) {
      this.caretDecoration.clear()
    }
  }

  updateCookieTimeout: NodeJS.Timeout | undefined = undefined

  onContentChange(input: string) {
    // We don't want to spam new cookie values every keyboard press.
    // We only save if no changes have been made for one second.
    if (this.updateCookieTimeout != undefined) {
      clearInterval(this.updateCookieTimeout)
    }
    this.updateCookieTimeout = setTimeout(() => this.updateCookie(input), 1000)
  }

  private updateCookie(input: string) {
    this.myCookieService.setCodeForLevel(this.levelId, input)
  }
}
