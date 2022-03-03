import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, parameters } from "../global/styles";
import { Icon, withBadge } from "react-native-elements";

export default function HomeHeader() {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Icon type="material-community" name="menu" color="black" size={32} />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          DY Tracker
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
        }}
      >
        <BadgeIcon
          type="material-community"
          name="cart"
          size={30}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    height: parameters.headerHeight,
    justifyContent: "space-between",
    width: parameters.width,
    marginTop: 10,
  },
});
