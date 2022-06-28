import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ListItem, Body, Left } from "native-base";

function OnlineUsers({ nickName }) {
  return (
    <View>
      <TouchableOpacity>
        <ListItem style={styles.list} key={Math.random()}>
          <Body style={styles.body}>
            <Left>
              <Text>{nickName}</Text>
            </Left>
          </Body>
        </ListItem>
      </TouchableOpacity>
    </View>
  );
}

export default OnlineUsers;

const styles = StyleSheet.create({
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    height: 20,
  },
  list: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    height: 50,
    flex: 1,
  },
});
