import { Button, StyleSheet, Text, View } from "react-native";
import StoreCard from "../component/StoreCard";

function HomeScreen({ navigation }) {
  function storeButtonHandler() {}

  const prodtName = "This is the first produt";

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.menuTitle}>Nearby Stores -{">"}</Text>
      <StoreCard productname={prodtName} onPress={storeButtonHandler} />
    </View>
  );
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
