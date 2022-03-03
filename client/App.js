import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";
import HomeScree from "./src/screens/HomeScree";
import AuthStack from "./src/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import SearchScreen from "./src/screens/SearchScreen";
import HomeHeader from "./src/components/HomeHeader";

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      {/*<AppStack />*/}
      {/*}  <HomeScree />*/}
      <SearchScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
