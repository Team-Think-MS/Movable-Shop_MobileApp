import { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../../constant/Styles";
import Input from "./Input";
import PrimaryButton from "../UI/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import Axios from "axios";
import { Picker } from "@react-native-picker/picker";

function StoreForm({ defaultInputData }) {
  
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
  const [selectedCategory, setSelectedCategory] = useState(
    defaultInputData ? defaultInputData.categoryId : null
  );
  const [imageIsValid, setImageIsValid] = useState(true);
  const [selectedCategoryIsValid, setSelectedCategoryIsValid] = useState(true);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
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

  function publishPressedHandler() {
    const storeData = {
      storeName: inputs.title.value,
      description: inputs.description.value,
      picture: image,
      categoryId: selectedCategory,
    };

    const isStoreNameValid = storeData.storeName.trim().length > 0;
    const isDescriptionValid = storeData.description.trim().length > 0;
    const isPictureValid = !storeData.picture;
    const isSelectedCategoryValid = !selectedCategory;

    if (!isStoreNameValid || !isDescriptionValid || isPictureValid || isSelectedCategoryValid) {
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
      setSelectedCategoryIsValid(!isSelectedCategoryValid);
      return;
    }
    submitData(storeData);
    navigation.navigate("Selling Managment");
  }

  async function submitData(storeData) {
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
          categoryId: selectedCategory
        });
      });
    }
  }

  const formIsInvalid =
    !inputs.title.isValid || !inputs.description.isValid || !imageIsValid || !selectedCategoryIsValid;


    const imagelabelStyles = [styles.imagePickerLabel];
    const categorylabelStyles = [styles.categoryPickerLabel];
    if(!imageIsValid) {
      imagelabelStyles.push(styles.invaildLabel);
    }
    if(!selectedCategoryIsValid) {
        categorylabelStyles.push(styles.invaildLabel);
    }

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainer}>
      <ScrollView>
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
              <Pressable onPress={pickImage} style={styles.pickerContainer}>
                <Ionicons name="image-outline" size={70} color="black" />
              </Pressable>
            )}
            {image && <Image source={{ uri: image }} style={styles.image} />}

            <Text style={imagelabelStyles}>Image</Text>
          </View>
          <View style={styles.imagePickerContainer}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCategory(itemValue)
                }
              >
                <Picker.Item label="Vegetables" value="1" />
                <Picker.Item label="Bakery" value="2" />
                <Picker.Item label="Ice Cream" value="3" />
                <Picker.Item label="Sweet" value="4" />
                <Picker.Item label="Fruit" value="5" />
                <Picker.Item label="Bun" value="6" />
              </Picker>
            </View>

            <Text style={categorylabelStyles}>Store Category</Text>
          </View>
        </View>
        </ScrollView>
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
  image: {
    margin: 4,
    width: 100,
    height: 100,
    borderRadius: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.gray200
  },
  imagePickerLabel: {
    margin: 5,
    fontSize: 16,
  },
  categorylabelStyles: {
    margin: 5,
    fontSize: 16,
  },
  invaildLabel: {
    color: GlobalStyles.colors.error400
  },
  pickerContainer: {
    margin: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.gray200
  }
});
