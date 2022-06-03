import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import HomeScreen from "./screens/HomeScreen";
import StoreOverviewScreen from "./screens/StoreOverviewScreen";
import SellingOverviewScreen from "./screens/SellingOverviewScreen";
import CustomDrawerContent from "./component/CustomDrawerContent";

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
    </drawer.Navigator>
  );
}

export default function App() {
  return (
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
          name="StoreScreen"
          component={StoreOverviewScreen}
          options={{
            title: "Store Screen",
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
