import React from "react";
import MainView from "./components/MainView";
import MovieStore from "./stores/MovieStore";

// Create a stateless function component rather than a class-based one
const App = () => {
  const movieStore = new MovieStore();

  return <MainView movieStore={movieStore} />;
};

export default App;
