import { Component, OnInit } from '@angular/core';
import {generate} from 'rxjs';
import * as bcrypt from 'bcryptjs';
import {ApiService} from '../../Shared/Services/api.service';
import {UserService} from '../../Shared/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {
  password: string;



  constructor(private apiService: ApiService, private userService: UserService) { }

  ngOnInit() {
  }

  login(){
    this.apiService.loginAdmin(this.password).subscribe(item =>{
      if(item != null){
        this.userService.placeUser(item);
      }
      else{
        this.notifyUser();
      }
    });
  }

  private notifyUser() {
    alert("password is incorrect, please try again")
  }
}
