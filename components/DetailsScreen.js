import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 15
  },
  title: {
    padding: 15,
    fontSize: 28
  },
  director: { fontSize: 22, padding: 10 },
  description: {
    padding: 10,
    fontSize: 18
  }
});

export default class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam("movie");

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {movie.title} ({movie.year})
        </Text>
        <Text style={styles.director}>Réalisateur(s) : {movie.director}</Text>
        <Text style={styles.description}>{movie.shortDescription}</Text>
      </View>
    );
  }
}
