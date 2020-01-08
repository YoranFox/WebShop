import {Component, Input, OnInit} from '@angular/core';
import {LpModel} from '../../Shared/Models/lp-model';
import {MusicDemoComponent} from '../../Shared/music-demo/music-demo.component';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() lp: LpModel;


  constructor() {

  }

  ngOnInit() {
  }

}
