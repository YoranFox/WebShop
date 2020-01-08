import { Component, OnInit } from '@angular/core';
import {LpModel} from '../../../Shared/Models/lp-model';
import {SortingService} from '../../../Shared/Services/sorting.service';
import {Subscription} from 'rxjs';
import {FilterModel} from '../../../Shared/Models/filter-model';
import {ApiService} from '../../../Shared/Services/api.service';

@Component({
  selector: 'app-lp-list',
  templateUrl: './lp-list.component.html',
  styleUrls: ['./lp-list.component.css']
})
export class LpListComponent implements OnInit {

  public lpList : LpModel[] = [];
  private subscription: Subscription;
  private sortedList: LpModel[] = [];
  private apiService : ApiService;

  constructor(ss : SortingService, as: ApiService) {
    this.apiService = as;
    this.generateLps();
    this.subscription = ss.getEmitValue()
      .subscribe(item => this.filterContent(item));

  }

  filterContent(filter : FilterModel){

    this.apiService.refreshContent();
    let sortedList = this.filterName(filter.name);
    // filterGenre(filter.genre, sortedList);
    this.sortedList = sortedList;
  }

  filterName(input: string) {
    let sortedList : LpModel[] = [];
    if(input == '' || input == null) return this.lpList;
    this.lpList.forEach( (lp) => {
      let name = lp.albumName.toLowerCase();
      let band = lp.bandName.toLowerCase();
      input = input.toLowerCase();
      if(name == input || band == input){
        sortedList.push(lp);
      }
    });
    return sortedList;
  }

  generateLps() {

    this.apiService.test.subscribe((data)=>{
      this.lpList = data;
      this.sortedList = this.lpList;
    });
    // this.lpList.push(new LpModel('love gun', 'KISS', 'good', 'metal', 'love-gun_kiss.jpg', 'https://www.youtube.com/embed/vCo2QMJcsDg', 19.99));
    // this.lpList.push(new LpModel('white', 'Beatles', 'good', 'rock', 'white-album_The-BEATLES.jpg', 'https://www.youtube.com/embed/A_MjCqQoLLA', 65.43));
    // this.lpList.push(new LpModel('Dirty Deeds Done Dirt Cheap', 'AC/DC', 'good', 'rock', 'Dirty-Deeds-Done-Dirt-Cheap_AC-DC.jpg', 'https://www.youtube.com/embed/UIE4UjBtx-o', 65.43));


  }

  ngOnInit() {

  }

}
