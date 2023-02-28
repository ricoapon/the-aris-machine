import { Component } from '@angular/core';

@Component({
  selector: 'app-level-screen',
  templateUrl: './level-screen.component.html',
  styleUrls: ['./level-screen.component.css']
})
export class LevelScreenComponent {
  content = 'inbox\noutbox\n';
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
