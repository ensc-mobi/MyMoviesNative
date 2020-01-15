import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  text: {
    flex: 1,
    fontSize: 18
  }
});

@observer
export default class MovieItem extends React.Component {
  render() {
    const { movie } = this.props;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              movie: movie
            });
          }}
        >
          <Text style={styles.text}>
            {movie.title} ({movie.year})
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
