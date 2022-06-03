import { View, Pressable, Text, StyleSheet } from "react-native";

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
    borderColor: "#8AA6DC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    borderWidth: 1,
    backgroundColor: "white",
    margin: 5
  },
  text: {
    color: "#154DB9",
    fontSize: 16,
  },
});
