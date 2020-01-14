import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  text: {
    flex: 1,
    fontSize: 14
  }
});

@observer
export default class MovieItem extends React.Component {
  render() {
    const title = this.props.movie.title;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}
