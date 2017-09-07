import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectoryExplorerComponent } from './directory-explorer/directory-explorer.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import {RootService} from "./services/root.service";

@NgModule({
  declarations: [
    AppComponent,
    DirectoryExplorerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    RootService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
