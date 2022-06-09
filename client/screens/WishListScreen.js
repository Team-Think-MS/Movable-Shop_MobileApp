import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import WishListProductCard from "../component/WishListProductCard";

import { PRODUCTS } from "../data/dummy-data";

function WishListScreen() {
  const productsIdsWishlist = useSelector((state) => state.wishList.productIds);
  const productsWishlist = PRODUCTS.filter((product) =>
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
        flex:1
    }
})
