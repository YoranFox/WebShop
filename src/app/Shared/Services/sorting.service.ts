import {EventEmitter, Injectable, Output} from '@angular/core';
import {Genre} from '../../genre/genre.enum';
import {FilterModel} from '../Models/filter-model';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  filter : FilterModel = new FilterModel();

  @Output() filterFire: EventEmitter<FilterModel> = new EventEmitter();

  constructor() { }

  setNameFilter(input : string)
  {
    this.filter.name = input;
    this.filterFire.emit(this.filter);
  }

  setGenreFilter(input : Genre)
  {
    this.filter.genre = input;
    this.filterFire.emit(this.filter);
  }

  getEmitValue() {
    return this.filterFire;
  }
}
