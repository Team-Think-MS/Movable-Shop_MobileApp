import { useLayoutEffect, useState } from "react";
import { Text, Image, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { PRODUCTS } from "../data/dummy-data";
import { GlobalStyles } from "../constant/Styles";
import PrimaryButton from "../component/UI/PrimaryButton";
import AddDeleteItemToCartButton from "../component/UI/AddDeleteItemToCartButton";
import { wishListActions } from "../store/Redux/wishList-slice";
import { cartListActions } from "../store/Redux/cartList-slice";

function ProductDetailsScreen({ navigation, route }) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    if (count == 0) return;
    setCount(count - 1);
  }
  const dispatch = useDispatch();
  const productsWishlist = useSelector((state) => state.wishList.productIds);
  const productsCartlist = useSelector((state) => state.cartList.cartProduct);
  const selectedProductId = route.params.productID;
  const selectedProduct = PRODUCTS.find(
    (product) => product.productId === selectedProductId
  );

  const isProductWishList = productsWishlist.includes(selectedProductId);

  const productCartList = productsCartlist.find(
    (prodct) => prodct.productId === selectedProductId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedProduct.productName,
    });
  }, [navigation, selectedProduct]);

  function changeProductWishListStatusHandler() {
    if (isProductWishList) {
      dispatch(
        wishListActions.removeProductWishList({ id: selectedProductId })
      );
    } else {
      dispatch(wishListActions.addProductWishList({ id: selectedProductId }));
    }
  }

  function addToCartHandler() {
    if (productCartList) {
      console.log('ok')
      cartListActions.updateProductCart({id: selectedProductId, qnty: count, pName: selectedProduct.productName, totPrice: selectedProduct.price * count })
    } else {
      dispatch(
        cartListActions.addProductCart({ id: selectedProductId, qnty: count, pName: selectedProduct.productName, totPrice: selectedProduct.price * count })
      );
    }
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedProduct.picture }}
            style={styles.image}
          />
          <Pressable
            style={({ pressed }) => [
              styles.icon,
              pressed ? styles.pressed : true,
            ]}
            onPress={changeProductWishListStatusHandler}
          >
            <Ionicons
              name={isProductWishList ? "ios-heart-sharp" : "ios-heart-outline"}
              size={24}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Rs.{selectedProduct.price}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
      </View>
      <View>
        <AddDeleteItemToCartButton
          pressAddItem={increaseCount}
          pressDeleteItem={decreaseCount}
          count={count}
        />
        <PrimaryButton children={"Add to Cart"} onPress={addToCartHandler} />
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
  pressed: {
    opacity: 0.35,
  },
});
