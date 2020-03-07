import { Component, OnInit } from '@angular/core';
import {UserService} from '../Shared/Services/user.service';
import {AppRoutingModule} from '../app-routing/app-routing-module.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  public init(){
    this.userService.user.subscribe(item => {
      this.checkLogin(item);
    })
  }


  private checkLogin(item: any) {
    if(item.role == "admin"){
      this.router.navigate(["admin/home"])
    }
    else{
      this.router.navigate(["admin/login"])
    }
  }
}
