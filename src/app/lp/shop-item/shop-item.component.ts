import {Component, Input, OnInit} from '@angular/core';
import {LpModel} from '../../Shared/Models/lp-model';
import {ShoppingCartService} from '../../Shared/Services/shopping-cart.service';
import {log} from 'util';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() lp: LpModel;
  inCart: boolean = false;

  constructor(public cartService : ShoppingCartService) {
    this.cartService.fire.subscribe(item =>{
      this.inCart = this.cartService.isInCart(this.lp);
      })

  }

  ngOnInit() {
    this.inCart = this.cartService.isInCart(this.lp);
    console.log(this.inCart);
  }

  addToShoppingCart(){
    if(this.inCart) this.cartService.removeFromShoppingCart(this.lp);
    else this.cartService.addToShoppingCart(this.lp)
  }
}
