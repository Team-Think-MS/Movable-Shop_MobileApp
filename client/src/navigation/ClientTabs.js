import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScree from "../screens/HomeScree";
import { color } from "react-native-elements/dist/helpers";
import SearchScreen from "../screens/SearchScreen";
import OrderScreen from "../screens/OrderScreen";
import AccountScreen from "../screens/AccountScreen";

const clientTab = createBottomTabNavigator();
const ClientTabs = () => {
  return (
    <clientTab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
      }}
    >
      <clientTab.Screen
        name="HomeScreen"
        component={HomeScree}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <clientTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <clientTab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarLabel: "Orders",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
      <clientTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </clientTab.Navigator>
  );
};

export default ClientTabs;
