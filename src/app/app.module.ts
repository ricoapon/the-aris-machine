import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LevelScreenComponent} from './level-screen/level-screen.component';
import {MachineScreenComponent} from './level-screen/machine-screen/machine-screen.component';
import {InOutTrackComponent} from './level-screen/machine-screen/in-out-track/in-out-track.component';
import {MemoryComponent} from './level-screen/machine-screen/memory/memory.component';
import {ControlPanelComponent} from './level-screen/machine-screen/control-panel/control-panel.component';
import {EditorComponent} from "./level-screen/editor/editor.component";
import { HomeComponent } from './home/home.component';
import { LevelSelectionComponent } from './level-selection/level-selection.component';
import {AppRoutingModule} from "./app-routing.module";

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
    LevelSelectionComponent
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
