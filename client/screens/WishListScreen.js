import { View, FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import WishListProductCard from "../component/WishListProductCard";
import { useState, useEffect } from "react";
import { fetchProducts } from "../util/http/product";

function WishListScreen() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const pdt = await fetchProducts();
        setProductData(pdt);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  const productsIdsWishlist = useSelector((state) => state.wishList.productIds);
  const productsWishlist = productData.filter((product) =>
    productsIdsWishlist.includes(product.productId)
  );

  function productRenderHandler(itemData) {
    return (
      <WishListProductCard
        name={itemData.item.productName}
        picture={itemData.item.picture}
        productid={itemData.item.productId}
      />
    );
  }

  if (productsIdsWishlist.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Products yet in Wish List!</Text>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={productsWishlist}
        keyExtractor={(item) => item.productId}
        renderItem={productRenderHandler}
      />
    </View>
  );
}

export default WishListScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
  },
});
