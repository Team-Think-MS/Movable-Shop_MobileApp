import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

const ChatMessages = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../images/user-3.jpg"),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../images/user-1.jpg"),
    messageTime: "2 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../images/user-4.jpg"),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../images/user-6.jpg"),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../images/user-7.jpg"),
    messageTime: "2 days ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
];

const Message = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <FlatList
        data={ChatMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Chat", { userName: item.userName })
            }
          >
            <View style={styles.UserInfo}>
              <View style={styles.UserImgWrapper}>
                <Image style={styles.UserImg} source={item.userImg} />
              </View>
              <View style={styles.TextSection}>
                <View style={styles.UserInfoText}>
                  <Text style={styles.UserName}>{item.userName}</Text>
                  <Text style={styles.PostTime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.MessageText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  Container: {
    //View
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 10,
    backgroundColor: "#ffffff",
  },
  Card: {
    //TouchableOpacity
    width: "100%",
  },
  UserInfo: {
    //View
    flexDirection: "row",
    justifyContent: "space-between",
  },
  UserImg: {
    //Image
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  UserImgWrapper: {
    //View
    paddingTop: 15,
    paddingBottom: 15,
  },
  TextSection: {
    //View
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  UserInfoText: {
    //view
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  UserName: {
    //text
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
  },
  PostTime: {
    //text
    fontSize: 12,
    color: "#666",
    fontFamily: "sans-serif-medium",
  },
  MessageText: {
    //text
    fontSize: 14,
    color: "#333333",
  },
});
