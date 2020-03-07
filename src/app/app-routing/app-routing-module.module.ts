import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {HomePageComponent} from '../Pages/home-page/home-page.component';
import {AdminLoginComponent} from '../admin/login/login.component';
import {AdminHomeComponent} from '../admin/admin-home/admin-home.component';
import {CreateProductComponent} from '../admin/admin-home/create-product/create-product.component';
import {OrdersViewComponent} from '../admin/admin-home/orders-view/orders-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'admin/login', component: AdminLoginComponent},
  { path: 'admin/home', component: AdminHomeComponent, children: [  {
      path: 'create',
      component: CreateProductComponent,
      outlet: "admin"
    },
      {
        path: 'orders',
        component: OrdersViewComponent,
        outlet: "admin"
      }]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
