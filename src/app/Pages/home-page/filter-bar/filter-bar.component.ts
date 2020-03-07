import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ItemCartComponent} from '../../../Item-cart/item-cart.component';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  filterClass : string = 'none';
  @ViewChild(ItemCartComponent, {static: false}) child:ItemCartComponent;

  @Input() collapsed: boolean;
  cartCollapsed: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if((document.documentElement.scrollTop) > document.getElementById('filter-bar').offsetTop){
      this.filterClass = 'static';
    }
    else{
      this.filterClass = 'none';
    }
  }


  showCart(){
    this.child.showCart();
  }

}
