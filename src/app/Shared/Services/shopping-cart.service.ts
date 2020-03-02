import {EventEmitter, Injectable, Output} from '@angular/core';
import {LpModel} from "../Models/lp-model";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  apiService: ApiService;
  lpList: LpModel[] = [];
  @Output() fire: EventEmitter<LpModel[]> = new EventEmitter();

  constructor(as: ApiService) {
    this.apiService = as;
  }

  public addToShoppingCart(lp: LpModel) : boolean{
    if(this.apiService.requestItemHold(lp.id)){
      this.lpList.push(lp);
      this.fire.emit(this.lpList);
      return true
    }
    return false;
  }

  removeFromShoppingCart(lp: LpModel) {
    const index: number = this.lpList.indexOf(lp);
    if (index !== -1) {
      this.lpList.splice(index, 1);
      this.fire.emit(this.lpList);
    }
    this.apiService.removeItemHold(lp.id);
  }
}
