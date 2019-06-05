import React from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

const Footer = () => {
  const background = TouchableNativeFeedback.Ripple(
    "rgba(255, 0, 0, 0.2)",
    true
  );

  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.footer}>
      <TouchableNativeFeedback
        background={background}
        onPress={() => setIndex(0)}
      >
        <View style={styles.footerTab}>
          <IonIcon
            name="md-settings"
            size={24}
            style={[index === 0 && styles.active]}
          />
          <Text style={[styles.footerText, index === 0 && styles.active]}>
            System Settings
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        background={background}
        onPress={() => setIndex(1)}
      >
        <View style={styles.footerTab}>
          <AntIcon
            name="appstore-o"
            size={24}
            style={[index === 1 && styles.active]}
          />
          <Text style={[styles.footerText, index === 1 && styles.active]}>
            App Settings
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eee",
    justifyContent: "center"
  },
  title: {
    fontSize: 17,
    fontWeight: "400",
    color: "#000"
  },
  footerTab: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  footerText: {
    fontSize: 12
  },
  active: {
    color: "#659df7"
  }
});

export default Footer;
