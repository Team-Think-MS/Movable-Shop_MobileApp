import { Text, Pressable, View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function StoreCardHome({ picture, storeName, storeid }) {
  const navigation = useNavigation();

  function storePressHandler() {
    navigation.navigate("StoreDetailsScreen", {
      storeID: storeid,
    });
  }
  return (
    <Pressable
      style={({ pressed }) => [
        styles.rootContainer,
        pressed ? styles.pressed : null,
      ]}
      onPress={storePressHandler}
    >
      <Image source={{ uri: picture }} style={styles.image} />
      <Text style={styles.title}>{storeName}</Text>
      <View style={styles.rating}>
        <Ionicons name="md-star-sharp" size={14} color="black" />
        <Ionicons name="md-star-sharp" size={14} color="black" />
        <Ionicons name="md-star-sharp" size={14} color="black" />
        <Ionicons name="md-star-sharp" size={14} color="black" />
        <Ionicons name="star-half-sharp" size={14} color="black" />
        <Text style={styles.ratingText}> (17)</Text>
      </View>
    </Pressable>
  );
}

export default StoreCardHome;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 16,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
  },
  pressed: {
    opacity: 0.75,
  },
});
