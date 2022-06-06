import AuthStack from "./src/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "./src/components/HomeHeader";
import {Provider} from 'react-redux';
import store from "./src/Redux/Store";

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
      <HomeHeader />
      <AuthStack />
    </NavigationContainer>
    </Provider>
  
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
