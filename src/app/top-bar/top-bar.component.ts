import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {



  constructor() { }

  @Input() collapsed: boolean;



  ngOnInit() {
  }



}
