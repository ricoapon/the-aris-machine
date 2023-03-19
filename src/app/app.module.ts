import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LevelScreenComponent} from './level-screen/level-screen.component';
import {MachineScreenComponent} from './level-screen/machine-screen/machine-screen.component';
import {InOutTrackComponent} from './level-screen/machine-screen/in-out-track/in-out-track.component';
import {MemoryComponent} from './level-screen/machine-screen/memory/memory.component';
import {ControlPanelComponent} from './level-screen/machine-screen/control-panel/control-panel.component';
import {EditorComponent} from "./level-screen/editor/editor.component";
import { HomeComponent } from './navigation/home/home.component';
import { LevelSelectionComponent } from './navigation/level-selection/level-selection.component';
import {AppRoutingModule} from "./app-routing.module";
import {MonacoEditorModule} from "ngx-monaco-editor-v2";
import {monacoEditorConfig} from "./monaco-config/monacoEditorConfig";
import { MonacoDemoComponent } from './monaco-demo-overview/monaco-demo/monaco-demo.component';
import { MonacoDemoOverviewComponent } from './monaco-demo-overview/monaco-demo-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    LevelScreenComponent,
    MachineScreenComponent,
    InOutTrackComponent,
    MemoryComponent,
    ControlPanelComponent,
    EditorComponent,
    EditorComponent,
    HomeComponent,
    LevelSelectionComponent,
    MonacoDemoComponent,
    MonacoDemoOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(monacoEditorConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
