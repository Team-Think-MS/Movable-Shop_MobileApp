import { StyleSheet, View } from "react-native";

function HomeScreen() {

  return <View style={styles.rootContainer}></View>;
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  menuTitle: {
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 20,
  },
});
