import {Component, ElementRef, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MusicService} from '../Services/music.service';
import {Subscription} from 'rxjs';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {LpModel} from "../Models/lp-model";

@Component({
  selector: 'app-music-demo',
  templateUrl: './music-demo.component.html',
  styleUrls: ['./music-demo.component.css']
})

@Injectable()
export class MusicDemoComponent implements OnInit {
  url : string = '';
  playing : boolean = false;

  private subscription: Subscription;
  constructor(ms : MusicService){
    this.subscription = ms.getEmittedValue()
      .subscribe(item => this.setUrl(item));

  }

  setUrl(lp : LpModel){
    if (!lp) {
      this.playing = false;
      this. url = '';
    }
    else{
      this.playing = true;
      this.url = lp.demoLink + '?mute=1&autoplay=1';
    }
  }

  ngOnInit() {
  }


}
