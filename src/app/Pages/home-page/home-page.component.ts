import {Component, EventEmitter, HostListener, Inject, Injectable, OnInit, Output, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {MusicService} from '../../Shared/Services/music.service';
import {LoaderService} from '../../Shared/Services/loader.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  topbarCollapsed : boolean;
  private subscription: Subscription;
  private musicService : MusicService;
  private loaderService : LoaderService;

  constructor(ms : MusicService) {
    this. musicService = ms;
    this.topbarCollapsed = false;
  }

  change() {

  }



  ngOnInit() {
  }
}
