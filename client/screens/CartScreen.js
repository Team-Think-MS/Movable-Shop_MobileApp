import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../component/CartCard";
import PrimaryButton from "../component/UI/PrimaryButton";
import SecondaryButton from "../component/UI/SecondaryButton";
import { GlobalStyles } from "../constant/Styles";
import { PRODUCTS } from "../data/dummy-data";
import { cartListActions } from "../store/Redux/cartList-slice";

function CartScreen({ navigation }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartList.cartProduct);
  const cartItemsIds = cartItems.map((item) => {
    return item.productId;
  });
  const cartItemsNumber = cartItems.map((item) => {
    return item.quantity;
  });
  const productsCartlist = PRODUCTS.filter((product) =>
    cartItemsIds.includes(product.productId)
  );

  const subTotalPrice = cartItems
    .map((item) => item.totalPrice)
    .reduce((a, b) => a + b, 0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: false,
    });
  }, [navigation]);

  function renderCartItems(itemData) {
    return (
      <CartCard
        productName={itemData.item.productName}
        price={itemData.item.totalPrice}
        quantity={itemData.item.quantity}
        productId={itemData.item.productId}
      />
    );
  }

  if (cartItems.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Products yet in Cart!</Text>
      </View>
    );
  }

  function createNewCart() {
    dispatch(cartListActions.resetCart());
    navigation.navigate("HomeScrenn");
  }

  const isAuthState = useSelector((state) => state.isAuth.authState);
  const isAuthUser = !(
    isAuthState &&
    Object.keys(isAuthState).length === 0 &&
    Object.getPrototypeOf(isAuthState) === Object.prototype
  );

  function checkoutPressedHandler() {
    if (isAuthUser) {
      navigation.navigate("CheckoutScreen", {
        subtot: subTotalPrice,
      });
    } else {
      Alert.alert("You are not user!", "Plase sign in your account", [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sign in",
          onPress: () => {
            navigation.navigate("SignInScreen");
          },
        },
      ]);
    }
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.itemListContainer}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.productId}
          renderItem={renderCartItems}
        />
      </View>
      <View style={styles.footerConatiner}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.subTotalText}>Sub Total :</Text>
          <Text style={styles.subTotalPrice}>Rs.{subTotalPrice}.00</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            children={"Checkout"}
            onPress={checkoutPressedHandler}
          />
          <SecondaryButton
            children={"Create a new Order"}
            onPress={createNewCart}
          />
        </View>
      </View>
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 50,
  },
  itemListContainer: {},
  footerConatiner: {},
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "8%",
    marginBottom: 20,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.gray200,
  },
  buttonContainer: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
  },
  subTotalText: {
    fontSize: 20,
  },
  subTotalPrice: {
    fontSize: 22,
    fontWeight: "500",
  },
});
