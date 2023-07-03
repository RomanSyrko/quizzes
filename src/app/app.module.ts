import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './components/home-page/home.component';
import {PlayComponent} from './components/play-page/play.component';
import {FinishComponent} from './components/finish-page/finish.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink
  ],
  providers: [PlayComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
