import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import MIcon from "react-native-vector-icons/MaterialIcons";

const ListItem = ({ title, iconName, iconColor, iconSize, rightIcon }) => {
  console.log(iconSize);

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: iconColor,
            borderRadius: iconSize * 2,
            width: iconSize * 1.5
          }
        ]}
      >
        <IonIcon
          name={iconName}
          style={[styles.icon, { fontSize: iconSize }]}
        />
      </View>

      <View style={styles.listItem}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.listItemText}>{title}</Text>
          {rightIcon && <MIcon name={rightIcon} style={styles.rightIcon} />}
        </View>

        <View style={styles.border} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    padding: 5
  },
  icon: {
    color: "#fff"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  listItem: {
    flex: 1,
    paddingTop: 5
  },
  border: {
    paddingTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5"
  },
  listItemText: {
    fontSize: 16
  },
  rightIcon: {
    fontSize: 24
  }
});

export default ListItem;
