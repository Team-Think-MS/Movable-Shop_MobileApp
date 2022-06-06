import {
  Image,
  Pressable,
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
} from "react-native";
import { GlobalStyles } from "../../constant/Styles";
import { useNavigation } from "@react-navigation/native";

function StoreCard({ storeName, picture, storeid }) {
  const navigation = useNavigation();

  function storePressedHandler() {
    navigation.navigate("StoreDetailsScreen", {
      storeID: storeid,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={storePressedHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: picture }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{storeName}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.6</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default StoreCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 20,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    height: 200,
    width: "100%",
  },
  titleText: {
    margin: 15,
    fontSize: 16,
  },
  ratingText: {},
  ratingContainer: {
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: GlobalStyles.colors.gray100,
    overflow: "hidden",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    overflow: "hidden",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
