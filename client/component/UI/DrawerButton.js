import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constant/Styles";

function DrawerButton({ iconName, title, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.rootContainer,
        pressed ? styles.pressed : true,
      ]}
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
    >
      <Ionicons name={iconName} size={24} color="black" />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default DrawerButton;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    paddingLeft: '15%',
    margin: 5
  },
  text: {
    fontSize: 20,
    marginLeft: "15%",
  },
  pressed: {
    opacity: 0.45,
    backgroundColor:
      Platform.OS === "android" ? "white" : GlobalStyles.colors.gray100,
  },
});
