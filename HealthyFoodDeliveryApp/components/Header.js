import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}> Healthy Food Delivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#494a49",
    width: "100%",
    height: "90",
    alignContent: "center",
    alignItems: "center",
    paddingTop: "50",
  },

  textContainer: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});

export default Header;
