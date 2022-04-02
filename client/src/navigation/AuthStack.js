import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScree from "../screens/HomeScree";
import SearchScreen from "../screens/SearchScreen";
import SignIn from "../screens/SignIn";
import ProductScreen from "../screens/ProductScreen";
import ClientTabs from "./ClientTabs";
//import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={HomeScree} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="ClientTabs" component={ClientTabs} />
      {/**  <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />*/}
    </Stack.Navigator>
  );
}
