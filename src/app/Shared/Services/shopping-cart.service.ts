import {EventEmitter, Injectable, Output} from '@angular/core';
import {LpModel} from "../Models/lp-model";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  apiService: ApiService;
  lpList: LpModel[] = [];
  @Output() fire: EventEmitter<LpModel[]> = new EventEmitter();

  constructor(as: ApiService, us: UserService) {
    this.apiService = as;
    us.user.subscribe(item => {
      if(us.currentUser != null)
      this.checkForShoppingCartItems();
    })
  }

  public checkForShoppingCartItems(){
    this.apiService.getShoppingCartItems().subscribe(items =>{
      console.log(items);
      this.lpList = items;
      this.fire.emit(this.lpList);
    })
  }

  public addToShoppingCart(lp: LpModel){
    this.apiService.requestItemHold(lp.id).subscribe(item=>{
      if(item) {
        console.log("added to shopping cart");
        this.lpList.push(lp);
        this.fire.emit(this.lpList);
      }
      else{ console.log("not added to shopping cart");
      }
    })
  }

  removeFromShoppingCart(lp: LpModel) {
    var index = -1;
    var i = 0;
    this.lpList.forEach(item =>{
      if(item.id == lp.id){
        index = i;
        return
      }
      i = i + 1;
    });
    if (index !== -1) {
      this.lpList.splice(index, 1);
      this.fire.emit(this.lpList);
    }
    this.apiService.removeItemHold(lp.id).subscribe();
  }

  isInCart(model: LpModel):boolean {
    var found = false;
    this.lpList.forEach(i =>{
      if(i.id == model.id){
        found = true;
      }
    })
    return found;
  }
}
