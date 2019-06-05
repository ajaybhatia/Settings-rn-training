import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>System Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    padding: 10
  },
  title: {
    fontSize: 17,
    fontWeight: "400",
    color: "#000"
  }
});

export default Header;
