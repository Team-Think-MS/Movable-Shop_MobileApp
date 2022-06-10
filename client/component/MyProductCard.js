import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { GlobalStyles } from "../constant/Styles";

import { useNavigation } from "@react-navigation/native";

function MyProductCard({ picture, name, price, productid }) {
  const navigation = useNavigation();

  function editButtonHandler() {
    navigation.navigate("ProductManageScreen", {
      id: productid,
    });
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.detailContainer}>
        <Image
          source={{ uri: picture }}
          style={styles.image}
        />
        <View>
          <Pressable
            style={({ pressed }) => (pressed ? styles.pressed : false)}
            onPress={editButtonHandler}
          >
            <Text style={styles.editText}>Edit</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rs.{price}</Text>
      </View>
    </View>
  );
}

export default MyProductCard;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.gray200,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
  },
  editButton: {},
  editText: {
    fontSize: 15,
    color: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.35,
  },
});
