import { observable } from "mobx";

export default class Movie {
  @observable id;
  @observable title;
  @observable shortDescription;
  @observable longDescription;
  @observable director;
  @observable year;
  @observable image;

  constructor(
    id,
    title,
    shortDescription,
    longDescription,
    director,
    year,
    image
  ) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.director = director;
    this.year = year;
    this.image = image;
  }
}
