import {Component, HostListener, Input, OnInit} from '@angular/core';
import {SortingService} from '../../../../Shared/Services/sorting.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  sortingService : SortingService;

  @Input() collapsed: boolean;
  input: string;


  constructor(ss : SortingService) {
    this.sortingService = ss;

  }

  ngOnInit() {
    this.calculateSize();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateSize();
  }


  calculateSize(){
    var height = document.getElementById("s-cover").clientHeight;
    document.getElementById("s-cover").style.width = height.toString() + 'px';
    var arrowWidth = document.getElementById("s-arrow").clientWidth;

    document.documentElement.style.setProperty(`--${'arrow-width'}`, arrowWidth * .28 + 'px'); //suffix may be px or ''

    document.getElementById("s-input").style.fontSize = height * .35 + 'px';
  }

  filter(input: string) {
    this.sortingService.setNameFilter(input);
  }
}
