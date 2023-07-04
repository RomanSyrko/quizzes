import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home-page/home.component";
import {PlayComponent} from "./components/play-page/play.component";
import {FinishComponent} from "./components/finish-page/finish.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'play', component: PlayComponent},
  {path: 'finish', component: FinishComponent},
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
