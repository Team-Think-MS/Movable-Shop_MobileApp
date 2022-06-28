import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScree from "../screens/HomeScree";
import SearchScreen from "../screens/SearchScreen";
import SignIn from "../screens/SignIn";
import ProductScreen from "../screens/ProductScreen";
import ClientTabs from "./ClientTabs";
import SingleProduct from "../screens/SingleProduct";
import Checkout from "../screens/Checkout";
import DrawerNavigator from "./AppStack";
import CustomerReviews from "../screens/CustomerReviews";
import MyStack from "../navigation/HomeNavigator";
import CategoriesPage from "../screens/CategoriesPage";
import ProductList from "../screens/ProductList";
import Chat from "../screens/Chat";
//import Message from "../screens/Message";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <Stack.Screen
        name="SingleProduct"
        component={SingleProduct}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Customer Reviews"
        component={CustomerReviews}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Product List"
        component={ProductList}
        options={({ route }) => ({ title: route.params.productTitle })}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ route }) => ({ title: route.params.userName })}
      />
    </Stack.Navigator>
  );
}
