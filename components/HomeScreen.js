import React from "react";
import MainView from "./MainView";
import MovieStore from "../stores/MovieStore";

// Create a stateless function component rather than a class-based one
const HomeScreen = () => {
  const movieStore = new MovieStore();

  return <MainView movieStore={movieStore} />;
};

export default HomeScreen;
