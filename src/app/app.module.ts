import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EditorComponent} from './editor/editor.component';
import {SvgGridComponent} from './svg-grid/svg-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SvgGridComponent
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
