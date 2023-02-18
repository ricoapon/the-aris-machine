import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  @Output() runCode = new EventEmitter<String>()

  content = 'function myScript(){\n  return 100;\n}\n';
  options = {
    value: this.content,
    // Let's just use a language that looks similar. Good enough for now, should be custom later.
    mode: 'javascript',
    // Essential!
    lineNumbers: true,
    // Maybe make this customizable later on.
    theme: 'material',
    // Do not allow tabs at all. Everything should be spaces.
    extraKeys: {
      "Tab": function (cm: any) {
        cm.replaceSelection("  ", "end");
      },
      "Ctrl-Enter": this.execute(this)
    }
  }

  // A bit of a hacky workaround, but I didn't know how else to get this to work.
  execute(_this: any) {
    return () => {
      _this.runCode.emit(_this.content)
    }
  }
}
