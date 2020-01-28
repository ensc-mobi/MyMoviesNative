import { observable, get } from "mobx";
import Movie from "../domain/Movie";
import { getAllMovies } from "../helpers/mymoviesapi";

export default class MovieStore {
  @observable movies;

  constructor() {
    this.movies = [];
  }

  fetchAll() {
    this.movies = [];
    getAllMovies().then(movies => {
      movies.forEach(movieData => {
        const movie = new Movie(
          movieData.mov_id,
          movieData.mov_title,
          movieData.mov_description_short,
          movieData.mov_description_long,
          movieData.mov_director,
          movieData.mov_year,
          movieData.mov_image
        );
        this.movies = [movie, ...this.movies];
      });
    });
  }
}
