import { React, useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import SignIn from "./components/signIn";

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
