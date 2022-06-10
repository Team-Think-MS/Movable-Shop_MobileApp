import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScree from "../screens/HomeScree";
import SearchScreen from "../screens/SearchScreen";
import OrderScreen from "../screens/OrderScreen";
import AccountScreen from "../screens/AccountScreen";
import { ClientStack } from "./ClientStack";
import CartScreen from "../screens/CartScreen";
import CartIcon from "../components/CartIcon";
import CartNavigation from "./CartNavigation";

import Ionicons from 'react-native-vector-icons/Ionicons';

const clientTab = createBottomTabNavigator();
export default function ClientTabs() {
  return (
    <clientTab.Navigator
      screenOptions={{
        "tabBarActiveTintColor":"black",
        "tabBarStyle":[
          {
            "display":"flex"
          },
          null
        ]
      }}
    >
      <clientTab.Screen
        name="HomeScreen"
        component={HomeScree}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home"  color={color} size={size} />
          ),
        }}
      />
      <clientTab.Screen
        name="Search"
        //component={ClientStack}
        component={ClientStack}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search"  color={color} size={size} />
          ),
        }}
      />
      {/**  <clientTab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarLabel: "Orders",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      /> */}
    
      <clientTab.Screen
        name="Cart"
        component={CartNavigation}
        options={{
          tabBarLabel: "Cart",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View>
               <Ionicons name="cart"  color={color} size={size} />
               <CartIcon/>
            </View>
           
          ),
        }}
      />   
      <clientTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person"  color={color} size={size} />
          ),
        }}
      />
    </clientTab.Navigator>
  );
}
