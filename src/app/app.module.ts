import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LpCardComponent } from './lp/lp-card/lp-card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SearchBarComponent } from './Pages/home-page/filter-bar/search-bar/search-bar.component';
import { FilterBarComponent } from './Pages/home-page/filter-bar/filter-bar.component';
import { LpListComponent } from './Pages/home-page/lp-list/lp-list.component';
import { ShopItemComponent } from './lp/shop-item/shop-item.component';
import { LoginComponent } from './Shared/login.component';
import { MusicDemoComponent } from './Shared/music-demo/music-demo.component';
import {LoaderService} from './Shared/Services/loader.service';
import { SafePipe } from './Shared/Pipes/safe.pipe';
import { FooterComponent } from './footer/footer.component';
import {SortingService} from './Shared/Services/sorting.service';
import {MusicService} from './Shared/Services/music.service';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ApiService} from './Shared/Services/api.service';
import {InterceptorService} from "./Shared/Services/interceptor.service";
import { ItemListComponent } from './Item-cart/item-list/item-list.component';
import { ItemCartComponent } from './Item-cart/item-cart.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing-module.module';
import construct = Reflect.construct;
import {AdminLoginComponent} from './admin/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateProductComponent } from './admin/admin-home/create-product/create-product.component';
import { OrdersViewComponent } from './admin/admin-home/orders-view/orders-view.component';




@NgModule({
  declarations: [
    AppComponent,
    LpCardComponent,
    TopBarComponent,
    HomePageComponent,
    SearchBarComponent,
    FilterBarComponent,
    LpListComponent,
    ShopItemComponent,
    LoginComponent,
    MusicDemoComponent,
    SafePipe,
    FooterComponent,
    ItemListComponent,
    ItemCartComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    CreateProductComponent,
    OrdersViewComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule
    ],
  providers: [MusicService, LoaderService, SortingService, HttpClient, ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [MusicDemoComponent]
})

export class AppModule { }
