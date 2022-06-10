import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import HomeScreen from "./screens/HomeScreen";
import StoreOverviewScreen from "./screens/StoreOverviewScreen";
import SellingOverviewScreen from "./screens/SellingOverviewScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CustomDrawerContent from "./component/CustomDrawerContent";
import StoreDetailsScreen from "./screens/StoreDetailsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import WishListScreen from "./screens/WishListScreen";
import ProductManageScreen from './screens/ProductManageScreen';
import MyProductsListScreen from './screens/MyProductsListScreen'


import { Provider } from "react-redux";
import store from "./store/Redux/store";
import { StatusBar } from "expo-status-bar";

const stack = createStackNavigator();
const drawer = createDrawerNavigator();

function MenueDrawerNavigaterHandler() {
  return (
    <drawer.Navigator
      screenOptions={{}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <drawer.Screen name="Home Screnn" component={HomeScreen} />
      <drawer.Screen
        name="Selling Managment"
        component={SellingOverviewScreen}
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
          <stack.Navigator>
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
              options={{
                title: "Store Overview Screen",
              }}
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
              name='ProductManageScreen'
              component={ProductManageScreen}
              options={{
                title: "List Your Item",
              }}
            />
            <stack.Screen
              name='MyProducts'
              component={MyProductsListScreen}
              options={{
                title: "My Products",
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
