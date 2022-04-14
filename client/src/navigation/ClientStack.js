import { StyleSheet, Text, View } from "react-native";
import React from "react";
/*import {
  createStackNavigator,
  //TransitionPresets,
} from "@react-navigation/stack";*/
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScree from "../screens/HomeScree";
import SearchScreen from "../screens/SearchScreen";
import SingleProduct from "../screens/SingleProduct";
import ProductScreen from "../screens/ProductScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const ClientSearch = createNativeStackNavigator();

export  function ClientStack() {
  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      {/**   <ClientSearch.Screen
        name="ProductDetail"
        component={{ SingleProduct }}
        options={() => ({
          headerShown: false,
        })}
      />*/}
      {/**<ClientSearch.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={() => ({
          headerShown: false,
        })}
      /> */}
    </ClientSearch.Navigator>
  );
}
