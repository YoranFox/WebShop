import {EventEmitter, Injectable, Output} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {LpModel} from "../Models/lp-model";

@Injectable({
  providedIn: 'root'
})
export class MusicService {


  @Output() fire: EventEmitter<LpModel> = new EventEmitter();
  private lp: LpModel;

  constructor(private _sanitizer: DomSanitizer) { }

  setDemoLp(lp: LpModel){
    this.fire.emit(lp);
    this.lp = lp;
  }

  getEmittedValue() {
    return this.fire;
  }
}
