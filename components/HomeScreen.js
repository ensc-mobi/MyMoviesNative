import React from "react";
import MainView from "./MainView";
import MovieStore from "../stores/MovieStore";

export default class HomeScreen extends React.Component {
  render() {
    const movieStore = new MovieStore();
    const { navigation } = this.props;

    return <MainView movieStore={movieStore} navigation={navigation} />;
  }
}
