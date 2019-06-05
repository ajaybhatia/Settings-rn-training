import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const Body = () => {
  return (
    <ScrollView style={styles.container}>
      <ListItem
        iconName="ios-airplane"
        iconColor="red"
        iconSize={16}
        title="Airplane Mode"
      />
      <ListItem
        iconName="ios-wifi"
        iconColor="#32c6fc"
        iconSize={16}
        title="Wifi"
        rightIcon="keyboard-arrow-right"
      />
      <ListItem
        iconName="ios-bluetooth"
        iconColor="#32c6fc"
        title="Bluetooth"
        iconSize={16}
      />
      <ListItem
        iconName="md-today"
        iconColor="green"
        title="Dual SIM & mobile networks"
        iconSize={16}
        rightIcon="keyboard-arrow-right"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  }
});

export default Body;
