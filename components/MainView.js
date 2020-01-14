import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { observer } from "mobx-react";
import Header from "./Header";
import MovieItem from "./MovieItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  movieContainer: {
    flex: 1,
    marginHorizontal: 10
  }
});

@observer
export default class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.movieStore.init();
  }

  render() {
    const title = "MyMoviesNative";
    return (
      <View style={styles.container}>
        <Header title={title}></Header>
        <FlatList
          style={styles.movieContainer}
          data={this.props.movieStore.movies}
          keyExtractor={movie => movie.id.toString()}
          renderItem={({ item }) => <MovieItem movie={item} />}
        />
      </View>
    );
  }
}
