import 'react-native-gesture-handler';

import AuthStack from "./src/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "./src/components/HomeHeader";
import {Provider} from 'react-redux';
import store from "./src/Redux/Store";
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
       <Provider store={store}>
        <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    </Provider>
    </GestureHandlerRootView>
   
  
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
