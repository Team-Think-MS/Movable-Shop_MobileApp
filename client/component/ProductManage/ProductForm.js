import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import Input from "./Input";
import PrimaryButton from "../UI/PrimaryButton";
import { useState } from "react";
import { GlobalStyles } from "../../constant/Styles";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";
import { Ionicons } from "@expo/vector-icons";

function ProductForm({ defaultInputData, submitButtonLabel, onSubmit }) {
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
    stockQty: {
      value: defaultInputData ? defaultInputData.stockQty.toString() : "",
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

  async function submitHandler() {
    const productData = {
      productName: inputs.title.value,
      description: inputs.description.value,
      price: +inputs.price.value,
      stockQty: +inputs.stockQty.value,
      picture: image,
    };

    const isProductNameValid = productData.productName.trim().length > 0;
    const isDescriptionValid = productData.description.trim().length > 0;
    const isPriceValid = !isNaN(productData.price) && productData.price > 0;
    const isStockQtyValid =
      !isNaN(productData.stockQty) && productData.stockQty > 0;
    const isPictureValid = !productData.picture;

    if (
      !isProductNameValid ||
      !isDescriptionValid ||
      !isPriceValid ||
      !isStockQtyValid ||
      isPictureValid
    ) {
      setInputs((curInputs) => {
        return {
          title: {
            value: curInputs.title.value,
            isValid: isProductNameValid,
          },
          description: {
            value: curInputs.description.value,
            isValid: isDescriptionValid,
          },
          price: { value: curInputs.price.value, isValid: isPriceValid },
          stockQty: {
            value: curInputs.stockQty.value,
            isValid: isStockQtyValid,
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
        onSubmit({ productData, lk });
      });
    }

    return;
  }

  const inputsStyle = [styles.input];
  if (submitButtonLabel === "Publish the product") {
    inputsStyle.push(styles.inputsAddNew);
  }
  if (submitButtonLabel === "Save") {
    inputsStyle.push(styles.inputUpdate);
  }

  const formIsInvalid =
    !inputs.title.isValid ||
    !inputs.description.isValid ||
    !inputs.price.isValid ||
    !inputs.stockQty.isValid ||
    !imageIsValid;

  const imagelabelStyles = [styles.imagePickerLabel];
  if (!imageIsValid) {
    imagelabelStyles.push(styles.invaildLabel);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.rootContainer}>
        <View style={inputsStyle}>
          <ScrollView>
            <Input
              label={"Title"}
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
            <Input
              label={"Price"}
              invalid={!inputs.price.isValid}
              textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: inputChangeHandler.bind(this, "price"),
                value: inputs.price.value,
              }}
            />
            <Input
              label={"Stock"}
              invalid={!inputs.stockQty.isValid}
              textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: inputChangeHandler.bind(this, "stockQty"),
                value: inputs.stockQty.value,
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
          </ScrollView>
        </View>
        <View>
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values - please check your entered data!
            </Text>
          )}

          <View style={styles.button}>
            <PrimaryButton
              children={submitButtonLabel}
              onPress={submitHandler}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  input: {},
  inputsAddNew: {
   
  },
  inputUpdate: {
   
  },
  button: {
    alignItems: "center",
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error400,
    margin: 8,
  },
  imagePickerContainer: {
    marginHorizontal: 10,
  },
  pickerContainer: {
    margin: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.gray200,
  },
  imagePickerLabel: {
    margin: 5,
    fontSize: 16,
  },
  image: {
    margin: 4,
    width: 100,
    height: 100,
    borderRadius: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.gray200,
  },
});
