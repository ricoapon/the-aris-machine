import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humans-clone';
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
      }
    }
  }
}
