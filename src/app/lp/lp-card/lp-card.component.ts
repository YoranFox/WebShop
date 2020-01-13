import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LpModel} from '../../Shared/Models/lp-model';
import {MusicService} from '../../Shared/Services/music.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-lp-card',
  templateUrl: './lp-card.component.html',
  styleUrls: ['./lp-card.component.css'],
  animations: [
    trigger(
      'lpActions',[
        state('default', style({
          transform: 'translateX(0%) rotate(0deg)'
        })),
        state('hover-card', style({
          transform: 'translateX(45%) rotate(50deg)'
        })),
        state('hover-lp', style({
          transform: 'translateX(55%) rotate(60deg)'
        })),
        state('clicked-lp', style({
          transform: 'translateX(calc(200% - 10px)) rotate(300deg)'
        })),
        transition('* => clicked-lp',[animate('1s cubic-bezier(.25,.8,.25,1)')]),
        transition('hover-card => hover-lp',[animate('0.2s cubic-bezier(.25,.8,.25,1)')]),
        transition('* => *',[animate('0.3s cubic-bezier(.25,.8,.25,1)')]),

  ])]
})


export class LpCardComponent implements OnInit {
  private subscription: Subscription;
  @Input() lp: LpModel;
  state: String;
  musicService : MusicService;
  constructor(ms: MusicService) {
    this.musicService = ms;
    this.subscription = ms.getEmittedValue().subscribe(item => this.checkIfValid(item));
  }


  ngOnInit() {
  }

  checkIfValid(item : LpModel){
    if(item != this.lp){
      this.state = 'default';
    }
    else{
      this.state = 'clicked-lp';
    }
  }

  changeState(state: string) {
    switch(state) {
      case 'lp-click': {
        if(this.state == 'hover-lp'){
          this.state = 'clicked-lp';
          this.musicService.setDemoLp(this.lp)
        }
        else{
          this.state = 'default';
          this.musicService.setDemoLp(null);
        }
        break;
      }
      case 'lp-leave': {
        if(this.state != 'clicked-lp') this.state = 'hover-card';
        break;
      }
      case 'lp-hover': {
        if(this.state != 'clicked-lp') this.state = 'hover-lp';
        break;
      }
      case 'card-click': {
        // if(this.state == )
        break;
      }
      case 'card-leave': {
        if(this.state != 'clicked-lp') this.state = 'default';
        break;
      }
      case 'card-hover': {
        if(this.state != 'clicked-lp') this.state = 'hover-card';

        break;
      }
      default: {
        //statements;
        break;
      }

    }
  }
}
