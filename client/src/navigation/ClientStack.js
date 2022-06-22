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
import CartScreen from "../screens/CartScreen";

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
      {/**     <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      /> */}
 
      <ClientSearch.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      /> 
       <ClientSearch.Screen
        name="SingleProduct"
        component={SingleProduct}
        options={({ route }) => ({ title: route.params.productTitle })}
      />  
     
     
    </ClientSearch.Navigator>
  );
}
