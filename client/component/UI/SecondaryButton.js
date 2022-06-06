import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/Styles";

function SecondaryButton({ children, onPress }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  rootContainer: {
    width: 380,
    height: 50,
    padding: 5,
    borderColor: GlobalStyles.colors.primary400,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    borderWidth: 1,
    backgroundColor: "white",
    margin: 5
  },
  text: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
  },
});
