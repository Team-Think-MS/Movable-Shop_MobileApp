import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import StoreOverviewScreen from "./screens/StoreOverviewScreen";
import SellingOverviewScreen from "./screens/SellingOverviewScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CustomDrawerContent from "./component/CustomDrawerContent";
import StoreDetailsScreen from "./screens/StoreDetailsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import WishListScreen from "./screens/WishListScreen";
import ProductManageScreen from "./screens/ProductManageScreen";
import MyProductsListScreen from "./screens/MyProductsListScreen";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpAsaCustomerScreen from "./screens/SignUpAsaCustomerScreen";
import SignUpAsaSellerScreen from "./screens/SignUpAsaSellerScreen";

import { Provider } from "react-redux";
import store from "./store/Redux/Store";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";

const stack = createStackNavigator();
const drawer = createDrawerNavigator();

function MenueDrawerNavigaterHandler() {
  return (
    <drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <Pressable
            style={({ pressed }) => [
              { marginRight: "10%" },
              pressed ? { opacity: 0.35 } : false,
            ]}
            onPress={() => {
              navigation.navigate("CartScreen");
            }}
          >
            <Ionicons name="cart-outline" size={24} color="black" />
          </Pressable>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <drawer.Screen name="Home Screnn" component={HomeScreen} />
      <drawer.Screen
        name="Selling Managment"
        component={SellingOverviewScreen}
        options={{
          headerRight: false,
        }}
      />
      <drawer.Screen name="Categories" component={CategoryScreen} />
      <drawer.Screen name="Wish List" component={WishListScreen} />
    </drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={({ navigation }) => ({
              headerRight: () => (
                <Pressable
                  style={({ pressed }) => [
                    { marginRight: "10%" },
                    pressed ? { opacity: 0.35 } : false,
                  ]}
                  onPress={() => {
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Ionicons name="cart-outline" size={24} color="black" />
                </Pressable>
              ),
            })}
          >
            <stack.Screen
              name="HomeScrenn"
              component={MenueDrawerNavigaterHandler}
              options={{
                title: "Home",
                headerShown: false,
              }}
            />
            <stack.Screen
              name="StoreOverviewScreen"
              component={StoreOverviewScreen}
            />
            <stack.Screen
              name="StoreDetailsScreen"
              component={StoreDetailsScreen}
            />
            <stack.Screen
              name="ProductDetaislScreen"
              component={ProductDetailsScreen}
            />
            <stack.Screen
              name="ProductManageScreen"
              component={ProductManageScreen}
              options={{
                title: "List Your Item",
              }}
            />
            <stack.Screen
              name="MyProducts"
              component={MyProductsListScreen}
              options={{
                title: "My Products",
                headerRight: false,
              }}
            />
            <stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{
                title: "Cart",
              }}
            />
            <stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              options={{
                title: "Sign In",
                headerRight: false,
              }}
            />
            <stack.Screen
              name="SignUpAsaCustomerScreen"
              component={SignUpAsaCustomerScreen}
              options={{
                title: "Register",
                headerRight: false,
              }}
            />
            <stack.Screen
              name="SignUpAsaSellerScreen"
              component={SignUpAsaSellerScreen}
              options={{
                title: "Register",
                headerRight: false,
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
