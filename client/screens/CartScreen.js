import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Pressable, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CartCard from "../component/CartCard";
import PrimaryButton from "../component/UI/PrimaryButton";
import SecondaryButton from "../component/UI/SecondaryButton";
import { PRODUCTS } from "../data/dummy-data";

function CartScreen({ navigation }) {
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

  /*
  const cartItemsWithQunt = cartItemsNumber.map((number, index) => {
    return {
      quantity: number,
      productName: productsCartlist[index].productName,
      price: productsCartlist[index].price,
      productId: productsCartlist[index].productId
    };
  });

  */

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
          <Text></Text>
          <Text></Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton children={"Checkout"} />
          <SecondaryButton children={"Create a new Order"} />
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
    marginBottom: 50
  },
  itemListContainer: {},
  footerConatiner: {},
  totalPriceContainer: {},
  buttonContainer: {
    alignItems: 'center'
  },
});
