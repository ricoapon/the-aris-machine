import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./navigation/home/home.component";
import {LevelSelectionComponent} from "./navigation/level-selection/level-selection.component";
import {LevelScreenComponent} from "./level-screen/level-screen.component";
import {MonacoDemoOverviewComponent} from "./monaco-demo-overview/monaco-demo-overview.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'levels', component: LevelSelectionComponent},
  {path: 'levels/:id', component: LevelScreenComponent},
  {path: 'monaco-overview', component: MonacoDemoOverviewComponent},
  {path: '**', redirectTo: '/',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
