import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import HomeHeader from "../components/HomeHeader";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <HomeHeader />
      <AuthStack />
    </NavigationContainer>
  );
}
