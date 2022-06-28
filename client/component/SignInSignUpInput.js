import { View, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../constant/Styles";

function SignInSignUpInput({ textInputConfig, invalid }) {
  const inputStyles = [styles.rootContainer];
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={inputStyles}>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

export default SignInSignUpInput;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginVertical: 6,
    borderColor: GlobalStyles.colors.gray200,
  },
  input: {
    fontSize: 16,
  },
  invalidInput: {
    borderBottomColor: GlobalStyles.colors.error50,
  },
});
