import {Component, Input, OnInit} from '@angular/core';
import {LpModel} from '../../Shared/Models/lp-model';
import {ShoppingCartService} from '../../Shared/Services/shopping-cart.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() lp: LpModel;


  constructor(public cartService : ShoppingCartService) {

  }

  ngOnInit() {
  }

  addToShoppingCart(){
    if(this.cartService.addToShoppingCart(this.lp)){

    }
  }
}
