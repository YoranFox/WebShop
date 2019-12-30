import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LpCardComponent } from './lp/lp-card/lp-card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SearchBarComponent } from './Pages/home-page/filter-bar/search-bar/search-bar.component';
import { FilterBarComponent } from './Pages/home-page/filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LpCardComponent,
    TopBarComponent,
    HomePageComponent,
    SearchBarComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
