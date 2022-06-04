import { View, StyleSheet, Text, Pressable, Image } from "react-native";

function CategoryGridTile({ picture, categoryName, onPress }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={onPress}>
        <Image source={{ uri: picture }} style={styles.image} />
        <Text style={styles.text}>{categoryName}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 120,
  },
  text: {
    textAlign: "center",
  },
});
