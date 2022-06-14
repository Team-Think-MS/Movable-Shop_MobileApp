import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function OtherSignInButton({ children, onPress, icon }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.rootContainer,
        pressed ? styles.pressed : null,
      ]}
    >
    <Ionicons name={icon} size={24} color="black" />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OtherSignInButton;

const styles = StyleSheet.create({
  rootContainer: {
    width: 170,
    height: 50,
    padding: 5,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    margin: 7,
    borderWidth: 1
  },
  text: {
    marginLeft: '6%',
    fontSize: 12,
  },
  pressed: {
    opacity: 0.45,
  },
});
