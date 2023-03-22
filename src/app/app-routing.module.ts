import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./navigation/home/home.component";
import {LevelSelectionComponent} from "./navigation/level-selection/level-selection.component";
import {LevelScreenComponent} from "./level-screen/level-screen.component";
import {MonacoDemoOverviewComponent} from "./monaco-demo-overview/monaco-demo-overview.component";
import {DocsComponent} from "./navigation/docs/docs.component";
import {LanguageDocumentationComponent} from "./language-documentation/language-documentation.component";
import {NavigationComponent} from "./navigation/navigation.component";

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'levels', component: LevelSelectionComponent},
      {path: 'docs', component: DocsComponent},
    ],
  },
  {path: 'levels/:id', component: LevelScreenComponent},
  {path: 'docs/monaco-overview', component: MonacoDemoOverviewComponent},
  {path: 'docs/language-documentation', component: LanguageDocumentationComponent},
  {path: '**', redirectTo: '/',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
