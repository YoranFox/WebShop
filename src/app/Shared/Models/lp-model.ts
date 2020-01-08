import {Genre} from '../../genre/genre.enum';

export class LpModel{
  id : string;
  albumName : string
  bandName : string;
  condition : string;
  genre : Genre;
  coverUrl : string;
  demoLink : string;
  price : number;

  constructor(lp : string, albumName : string, bandName : string, condition : string, genre : string, coverUrl : string, demoLink : string, price : number) {
    this.albumName = albumName;
    this.bandName = bandName;
    this.condition = condition;
    this.genre = Genre[genre];
    this.coverUrl = coverUrl;
    this.demoLink = demoLink;
    this.price = price;
  }
}
