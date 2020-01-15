import React from "react";
import MainView from "./MainView";
import MovieStore from "../stores/MovieStore";

export default class HomeScreen extends React.Component {
  render() {
    const movieStore = new MovieStore();
    // All React Navigation screens receive this object as prop
    const { navigation } = this.props;

    // Navigation object is passed down to children components
    return <MainView movieStore={movieStore} navigation={navigation} />;
  }
}
