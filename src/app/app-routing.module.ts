import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LevelSelectionComponent} from "./level-selection/level-selection.component";
import {LevelScreenComponent} from "./level-screen/level-screen.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'levels', component: LevelSelectionComponent},
  {path: 'levels/:id', component: LevelScreenComponent},
  {path: '**', redirectTo: '/',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
