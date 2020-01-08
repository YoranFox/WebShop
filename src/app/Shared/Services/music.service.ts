import {EventEmitter, Injectable, Output} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MusicService {


  @Output() fire: EventEmitter<string> = new EventEmitter();

  constructor(private _sanitizer: DomSanitizer) { }

  setDemoUrl(url : string){
    if(!url) url = '';
    else url = url + '?autoplay=1&mute=1';
    this.fire.emit(url);
  }

  getEmittedValue() {
    return this.fire;
  }
}
