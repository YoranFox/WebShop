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
  inCart: boolean = false;

  constructor(public cartService : ShoppingCartService) {
    this.cartService.fire.subscribe(item =>{
      for(let i in item){
        if((<any>i).id == this.lp.id){
          this.inCart = true;
        }
      }
      })
  }

  ngOnInit() {
  }

  addToShoppingCart(){
    if(this.inCart) this.cartService.removeFromShoppingCart(this.lp);
    else this.cartService.addToShoppingCart(this.lp)
  }
}
