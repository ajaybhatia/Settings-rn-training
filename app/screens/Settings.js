import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Settings;
