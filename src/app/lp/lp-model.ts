import {OnInit} from '@angular/core';
import {Genre} from '../genre/genre.enum';

export class LpModel{
  name : String;
  genre : Genre;
  coverUrl : String;
  demoLink : String;

  constructor() {
  }
}
