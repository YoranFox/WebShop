import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {
  @Input() cartVisible: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  hideCart(){
    this.cartVisible = false;
  }

  showCart() {
    this.cartVisible = true;
  }
}
