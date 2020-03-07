import { Component } from '@angular/core';
import {ApiService} from './Shared/Services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'WebShop';

  constructor(apiService: ApiService){
    apiService.init();

}
}
