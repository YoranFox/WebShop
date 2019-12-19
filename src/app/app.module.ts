import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenreCardComponent } from './genre/genre-card/genre-card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    GenreCardComponent,
    TopBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
