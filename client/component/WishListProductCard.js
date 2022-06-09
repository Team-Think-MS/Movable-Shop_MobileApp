import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { wishListActions } from "../store/Redux/wishList-slice";
import { GlobalStyles } from "../constant/Styles";

function WishListProductCard({ picture, name, productid }) {
  const dispatch = useDispatch();

  function cancelHandler() {
    dispatch(wishListActions.removeProductWishList({ id: productid }));
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <Image source={{ uri: picture }} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.icon}>
        <Pressable
          style={(pressed) => (pressed ? styles.pressed : false)}
          onPress={cancelHandler}
        >
          <MaterialIcons name="cancel" size={35} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export default WishListProductCard;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: GlobalStyles.colors.gray200
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
  },
  icon: {
      marginRight: 10
  },
  pressed: {
    opacity: 0.35,
  },
});
