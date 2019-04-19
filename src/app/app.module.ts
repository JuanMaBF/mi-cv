import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MainComponent } from './pages/main/main.component';
import { GithubComponent } from './pages/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
