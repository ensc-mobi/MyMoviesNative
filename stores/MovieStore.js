import { observable } from "mobx";
import Movie from "../domain/Movie";

export default class MovieStore {
  @observable movies;

  constructor() {
    this.movies = [
      new Movie(1, "Le Loup de Wall Street"),
      new Movie(2, "Parasite")
    ];
  }
}
