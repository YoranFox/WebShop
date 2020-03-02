import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ItemCartComponent} from "../Item-cart/item-cart.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @ViewChild(ItemCartComponent, {static: false}) child:ItemCartComponent;


  constructor() { }

  @Input() collapsed: boolean;
  cartCollapsed: boolean = true;



  ngOnInit() {
  }

  showCart(){
    this.child.showCart();
  }



}
