import { TextInput, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/Styles";

function Input({ label, textInputConfig, style, invalid }) {
  const inputStyles = [styles.textInput];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput {...textInputConfig} style={inputStyles} />
      <Text style={[styles.label, invalid && styles.invalidLabel ]}>{label}</Text>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 10,
  },
  textInput: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    fontSize: 18,
    borderColor: GlobalStyles.colors.gray200,
    borderRadius: 5,
  },
  label: {
    margin: 5,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 70,
    textAlignVertical: "top",
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
  invalidLabel: {
    color: GlobalStyles.colors.error400
  }
});
