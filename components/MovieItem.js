import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
    const { title, year } = this.props.movie;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {title} ({year})
        </Text>
      </View>
    );
  }
}
