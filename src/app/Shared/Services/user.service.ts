import {EventEmitter, Injectable, Output} from '@angular/core';
import {UserModel} from '../Models/user-model';
import {Observable} from 'rxjs';
import {LpModel} from '../Models/lp-model';
import {AsyncPipe} from '@angular/common';
import {ApiService} from './api.service';
import {ShoppingCartService} from './shopping-cart.service';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiService: ApiService;
  currentUser: UserModel;
  @Output() user: EventEmitter<UserModel> = new EventEmitter();
  timer: any;
  constructor() {

  }

  setAPiService(item: any){
    console.log("setting api service");
    this.apiService = item;
  }

  placeUser(data: any) {
    localStorage.setItem('session_cookie', JSON.stringify(data));
    this.currentUser = new UserModel(data.sessionId, data.token, data.expDate, data.role);
    this.user.emit(this.currentUser);
    this.setTokenExpTimer();
  }

  setTokenExpTimer(){
    const timeLeft = this.currentUser.expDate - Date.now();
    this.timer = setTimeout(this.removeUser, timeLeft);
  }

  removeUser(){
    localStorage.clear();
    this.currentUser = null;
    window.location.reload();
    clearTimeout(this.timer);
  }
}
