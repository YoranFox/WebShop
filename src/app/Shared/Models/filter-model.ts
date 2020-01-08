import {Genre} from '../../genre/genre.enum';

export class FilterModel {

  name : string = '';
  genre : Genre = Genre.None;

  constructor() {
  }
}
