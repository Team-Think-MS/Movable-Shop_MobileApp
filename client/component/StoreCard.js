import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { STORES } from "../data/dummy-data";

function StoreCard({ productname, onPress }) {
  const selectstore = STORES.find((sid) => sid.storeId === "s1");
  const url = selectstore.picture;

  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.imageContainer} onPress={onPress}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.textContainer}>{productname}</Text>
      </Pressable>
    </View>
  );
}

export default StoreCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 200,
    height: "20%",
    padding: 10,
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    textAlign: "center",
    padding: 19,
  },
  image: {
    width: "100%",
    height: 150,
  },
});
