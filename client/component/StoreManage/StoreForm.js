import { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { GlobalStyles } from "../../constant/Styles";
import Input from "./Input";
import PrimaryButton from "../UI/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary} from 'react-native-image-picker';
import { Ionicons } from '@expo/vector-icons';

function StoreForm({ defaultInputData, onSubmit }) {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    title: {
      value: defaultInputData ? defaultInputData.storeName : "",
      isValid: true,
    },
    description: {
      value: defaultInputData ? defaultInputData.description : "",
      isValid: true,
    },
  });

  const [imgResponse, setImgResponse] = useState(null);

  const onButtonPress = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
      },
      setImgResponse
    );
  }, []);

  function inputChangeHandler(identifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [identifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function publishPressedHandler() {
    const storeData = {
      storeName: inputs.title.value,
      description: inputs.description.value,
      picture: imgResponse,
    };

    const isStoreNameValid = storeData.storeName.trim().length > 0;
    const isDescriptionValid = storeData.description.trim().length > 0;

    if (!isStoreNameValid || !isDescriptionValid) {
      setInputs((curInputs) => {
        return {
          title: {
            value: curInputs.title.value,
            isValid: isStoreNameValid,
          },
          description: {
            value: curInputs.description.value,
            isValid: isDescriptionValid,
          },
        };
      });
      return;
    }
    navigation.navigate("Selling Managment");
    onSubmit(storeData);
  }

  const formIsInvalid = !inputs.title.isValid || !inputs.description.isValid;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainer}>
        <View>
          <Input
            label={"Store Name"}
            invalid={!inputs.title.isValid}
            textInputConfig={{
              onChangeText: inputChangeHandler.bind(this, "title"),
              value: inputs.title.value,
            }}
          />
          <Input
            label={"Description"}
            invalid={!inputs.description.isValid}
            textInputConfig={{
              multiline: true,
              onChangeText: inputChangeHandler.bind(this, "description"),
              value: inputs.description.value,
            }}
          />
          <View style={styles.imagePickerContainer}>
            <Pressable onPress={onButtonPress}>
            <Ionicons name="image-outline" size={70} color="black" />

            </Pressable>
            <Text style={styles.imageLable}>Image</Text>
          </View>
        </View>
        <View style={styles.button}>
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values - please check your entered data!
            </Text>
          )}
          <PrimaryButton
            children={"Publish my store"}
            onPress={publishPressedHandler}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StoreForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: "space-between",
    marginBottom: 100,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error400,
    margin: 8,
  },
  button: {
    alignItems: "center",
  },
  imagePickerContainer: {
    marginHorizontal: 10,
  },
  imageLable: {
    margin: 5,
    fontSize: 16,
  },

});
