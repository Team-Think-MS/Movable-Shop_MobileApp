import { Pressable, View, StyleSheet, Text } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  rootContainer: {
    width: 380,
    height: 50,
    padding: 5,
    backgroundColor: '#8AA6DC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    margin: 5
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  },
});
