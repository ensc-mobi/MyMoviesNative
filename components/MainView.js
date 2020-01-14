import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { observer } from "mobx-react";
import MovieItem from "./MovieItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  movieContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10
  }
});

@observer
export default class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.movieStore.fetchAll();
  }

  render() {
    return (
      <View style={styles.container}>
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
