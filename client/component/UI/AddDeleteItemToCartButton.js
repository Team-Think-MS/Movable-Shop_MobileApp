import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/Styles";
import { Ionicons } from "@expo/vector-icons";


function AddDeleteItemToCartButton({ pressAddItem, pressDeleteItem, count }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={pressDeleteItem}
      >
        <Ionicons
          name="remove"
          size={30}
          color={GlobalStyles.colors.primary500}
        />
      </Pressable>
      <View style={styles.middleTextContainer}>
        <Text style={styles.itemsNumber}>{count}</Text>
        <Text style={styles.text}>Items</Text>
      </View>

      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={pressAddItem}
      >
        <Ionicons name="add" size={30} color={GlobalStyles.colors.primary500} />
      </Pressable>
    </View>
  );
}

export default AddDeleteItemToCartButton;

const styles = StyleSheet.create({
  rootContainer: {
    width: 360,
    height: 50,
    borderColor: GlobalStyles.colors.primary400,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 22,
    borderWidth: 1,
    backgroundColor: "white",
    margin: 5,
  },
  middleTextContainer: {
    marginHorizontal: 80,
    alignItems: "center",
  },
  itemsNumber: {
    fontWeight: "600",
    fontSize: 20,
    color: GlobalStyles.colors.primary500,
  },
  text: {
    color: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.25,
  },
});
