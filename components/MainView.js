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
export default class MainView extends React.Component {
  componentDidMount() {
    this.props.movieStore.fetchAll();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.movieContainer}
          data={this.props.movieStore.movies}
          keyExtractor={movie => movie.id.toString()}
          renderItem={({ item }) => (
            <MovieItem movie={item} navigation={navigation} />
          )}
        />
      </View>
    );
  }
}
