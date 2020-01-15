import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const imagesEndpoint = "http://localhost/mymovies-correction/images/";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 15
  },
  title: {
    fontSize: 28
  },
  director: { fontSize: 22, padding: 10 },
  description: {
    fontSize: 18
  },
  image: {
    width: 225,
    height: 300
  }
});

export default class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam("movie");
    const imageUrl = imagesEndpoint + movie.image;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {movie.title} ({movie.year})
        </Text>
        <Text style={styles.director}>Réalisateur(s) : {movie.director}</Text>
        <Text style={styles.description}>{movie.shortDescription}</Text>
        <Image style={styles.image} source={{ uri: imageUrl }}></Image>
      </View>
    );
  }
}
