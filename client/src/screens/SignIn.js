import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

function SignIn({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#20315f",
          }}
        >
          Sign In
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          borderWidth: 20,
          borderRadius: 10,
          borderColor: "black",
          padding: -1,
          justifyContent: "center",
          margin: 10,
          elevation: 3,
          width: "50%",
        }}
        onPress={() => navigation.navigate("ClientTabs")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Home Screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SignIn;
