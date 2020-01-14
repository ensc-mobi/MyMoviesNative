import { observable, get } from "mobx";
import Movie from "../domain/Movie";
import { getAllMovies } from "../helpers/mymoviesapi";

export default class MovieStore {
  @observable movies;

  constructor() {
    this.movies = [
      //new Movie(1, "Le Loup de Wall Street"),
      //new Movie(2, "Parasite")
    ];
  }

  init() {
    getAllMovies().then(movies => {
      //console.log(movies);
      movies.forEach(movie => {
        console.log(movie);
      });
    });
  }
}
