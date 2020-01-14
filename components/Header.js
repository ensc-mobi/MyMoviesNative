import React from "react";
import { StyleSheet, View, Text } from "react-native";

const colors = {
  background: "#f41a1a",
  titleText: "#fff"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: 35,
    paddingBottom: 10,
    flexDirection: "row"
  },
  title: {
    flex: 1,
    color: colors.titleText,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default class Header extends React.PureComponent {
  render() {
    const title = this.props.title;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
