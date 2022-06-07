import { useLayoutEffect } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { PRODUCTS } from "../data/dummy-data";
import { GlobalStyles } from "../constant/Styles";
import PrimaryButton from "../component/UI/PrimaryButton";
import AddDeleteItemToCartButton from "../component/UI/AddDeleteItemToCartButton";

function ProductDetailsScreen({ navigation, route }) {
  const selectedProductId = route.params.productID;
  const selectedProduct = PRODUCTS.find(
    (product) => product.productId === selectedProductId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedProduct.productName,
    });
  }, [navigation, selectedProduct]);

  return (
    <View style={styles.rootContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedProduct.picture }}
            style={styles.image}
          />
          <Ionicons
            name="ios-heart-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Rs.{selectedProduct.price}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
      </View>
      <View>
        <AddDeleteItemToCartButton />
        <PrimaryButton children={"Add to Cart"} />
      </View>
    </View>
  );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 60,
  },
  imageContainer: {
    marginTop: 10,
    margin: 20,
  },
  image: {
    height: 250,
    width: "100%",
    borderRadius: 20,
  },
  icon: {
    position: "absolute",
    top: 210,
    left: 310,
  },
  textContainer: {
    marginHorizontal: 15,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.gray200,
  },
  title: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  description: {
    marginLeft: 5,
  },
});
