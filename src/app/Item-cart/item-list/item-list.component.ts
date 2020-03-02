import { Component, OnInit } from '@angular/core';
import {LpModel} from "../../Shared/Models/lp-model";
import {ShoppingCartService} from "../../Shared/Services/shopping-cart.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemsInCart: LpModel[] = [];
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartService.fire.subscribe(item =>{
      this.itemsInCart = item;
    })
  }

  removeFromCart(lp: LpModel){
    this.cartService.removeFromShoppingCart(lp);
  }

}
