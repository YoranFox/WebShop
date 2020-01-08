import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  filterClass : string = 'none';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if((document.documentElement.scrollTop + 60) > document.getElementById('filter-bar').offsetTop){
      this.filterClass = 'static';
    }
    else{
      this.filterClass = 'none';
    }
  }

}
