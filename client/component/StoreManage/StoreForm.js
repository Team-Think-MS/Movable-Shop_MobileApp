import { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  Image,
} from "react-native";
import { GlobalStyles } from "../../constant/Styles";
import Input from "./Input";
import PrimaryButton from "../UI/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import Axios from "axios";

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

  const [image, setImage] = useState(
    defaultInputData ? defaultInputData.picture : null
  );
  const [imageIsValid, setImageIsValid] = useState(true);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
      setImageIsValid(true);
    }
  };

  function inputChangeHandler(identifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [identifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  async function publishPressedHandler() {
    const storeData = {
      storeName: inputs.title.value,
      description: inputs.description.value,
      picture: image,
    };

    const isStoreNameValid = storeData.storeName.trim().length > 0;
    const isDescriptionValid = storeData.description.trim().length > 0;
    const isPictureValid = !storeData.picture;

    if (!isStoreNameValid || !isDescriptionValid || isPictureValid) {
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
      setImageIsValid(!isPictureValid);
      return;
    }

    if (image) {
      const imageFile = {
        uri: image,
        type: `test/${image.split(".")[1]}`,
        name: `test.${image.split(".")[1]}`,
      };

      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "dyshoper");
      formData.append("cloud_name", "dj4w8sx0t");

      await Axios.post(
        "https://api.cloudinary.com/v1_1/dj4w8sx0t/image/upload",
        formData
      ).then((reponse) => {
        const lk = reponse["data"]["secure_url"];
        console.log(lk);
        Axios.post("http://localhost:3000/store/createStore", {
            storeName: storeData.storeName,
            description: storeData.description,
            picture: lk,
          });
      });
    }
    navigation.navigate("Selling Managment");
  }

  const formIsInvalid =
    !inputs.title.isValid || !inputs.description.isValid || !imageIsValid;

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
            {!image && (
              <Pressable onPress={pickImage}>
                <Ionicons name="image-outline" size={70} color="black" />
              </Pressable>
            )}
            {image && <Image source={{ uri: image }} style={styles.image} />}

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
  image: {
    margin: 5,
    width: 100,
    height: 100,
    borderRadius: 6,
  },
});
