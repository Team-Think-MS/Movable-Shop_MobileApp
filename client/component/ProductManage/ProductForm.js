import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "./Input";
import PrimaryButton from "../UI/PrimaryButton";
import { useState } from "react";

function ProductForm({ defaultInputData, submitButtonLabel, onSubmit, style }) {
  const [inputs, setInputs] = useState({
    title: {
      value: defaultInputData ? defaultInputData.productName : "",
      isValid: true,
    },
    description: {
      value: defaultInputData ? defaultInputData.description : "",
      isValid: true,
    },
    price: {
      value: defaultInputData ? defaultInputData.price.toString() : "",
      isValid: true,
    },
  });

  function inputChangeHandler(identifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [identifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const productData = {
      productName: inputs.title.value,
      description: inputs.description.value,
      price: +inputs.price.value,
    };

    onSubmit(productData);
  }

  const inputsStyle = [styles.input];
  if (submitButtonLabel === "Publish the product") {
    inputsStyle.push(styles.inputsAddNew);
  }
  if (submitButtonLabel === "Save") {
    inputsStyle.push(styles.inputUpdate);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainer}>
        <View style={inputsStyle}>
          <Input
            label={"Title"}
            textInputConfig={{
              onChangeText: inputChangeHandler.bind(this, "title"),
              value: inputs.title.value,
            }}
          />
          <Input
            label={"Description"}
            textInputConfig={{
              multiline: true,
              onChangeText: inputChangeHandler.bind(this, "description"),
              value: inputs.description.value,
            }}
          />
          <Input
            label={"Price"}
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "price"),
              value: inputs.price.value,
            }}
          />
        </View>
        <View style={styles.button}>
          <PrimaryButton children={submitButtonLabel} onPress={submitHandler} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductForm;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 10,
  },
  input: {},
  inputsAddNew: {
    marginBottom: "74%",
  },
  inputUpdate: {
    marginBottom: "59%",
  },
  button: {
    alignItems: "center",
  },
});
