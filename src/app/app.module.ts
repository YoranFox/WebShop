import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenreCardComponent } from './genre/genre-card/genre-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
