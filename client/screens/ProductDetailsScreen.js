import { useLayoutEffect, useState } from "react";
import { Text, Image, View, StyleSheet, Pressable, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
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
  const selectedProductName = route.params.productName;
  const selectedProductDescription = route.params.description;
  const selectedProductPrice = route.params.price;
  const selectedProductPicture = route.params.picture;
  const selectedProductStoreId = route.params.storeId;

  const isProductWishList = productsWishlist.includes(selectedProductId);

  const productCartList = productsCartlist.find(
    (prodct) => prodct.productId === selectedProductId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedProductName,
    });
  }, [navigation]);

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
    const isDifferentStore =
      !productsCartlist.filter(
        (product) => product.storeId === selectedProductStoreId
      ).length > 0;
    if (isDifferentStore && productsCartlist.length > 0) {
      Alert.alert("Create a new cart!", "And also add this product to new cart.", [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(
              cartListActions.resetAndAddNewProductCart({
                id: selectedProductId,
                qnty: count,
                pName: selectedProductName,
                totPrice: selectedProductPrice * count,
                strId: selectedProductStoreId,
              })
            );
            navigation.navigate("CartScreen");
          },
        },
      ]);
    } else if (!count == 0) {
      if (productCartList) {
        dispatch(
          cartListActions.updateProductCart({
            id: selectedProductId,
            qnty: count,
            totPrice: selectedProductPrice * count,
          })
        );
        navigation.navigate("CartScreen");
      } else {
        dispatch(
          cartListActions.addProductCart({
            id: selectedProductId,
            qnty: count,
            pName: selectedProductName,
            totPrice: selectedProductPrice * count,
            strId: selectedProductStoreId,
          })
        );
        navigation.navigate("CartScreen");
      }
    }
    return;
  }

  return (
    <View style={styles.rootContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedProductPicture }}
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
          <Text style={styles.title}>Rs.{selectedProductPrice}</Text>
          <Text style={styles.description}>{selectedProductDescription}</Text>
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
    width: 340,
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
