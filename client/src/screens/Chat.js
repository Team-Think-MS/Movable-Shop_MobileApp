import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello, How can I help you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        /**  {
        _id: 2,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      }, */
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#2e64e5",
            borderRadius: 25,
          },
          left: {
            borderRadius: 25,
            borderWidth: 0.05,
            borderColor: "black",
          },
        }}
        textStyle={{
          right: {
            color: "white",
          },
        }}
      />
    );
  };
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <Feather
            name="send"
            size={30}
            color="black"
            style={{ marginBottom: 5, marginRight: 5 }}
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <MaterialCommunityIcons
        name="chevron-double-down"
        size={22}
        color="#333"
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({});
