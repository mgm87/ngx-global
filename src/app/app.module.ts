import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConsoleTokenModule } from 'ngx-global';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConsoleTokenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
