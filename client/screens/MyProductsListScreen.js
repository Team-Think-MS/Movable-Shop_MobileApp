import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import MyProductCard from "../component/MyProductCard";
//import { PRODUCTS } from "../data/dummy-data";

function MyProductsListScreen() {
  /*
  const myProducts = PRODUCTS.filter(
    (product) => product.storeId.indexOf("s1") >= 0
  );
  */
 const selectedStoreProducts = useSelector((state)=>state.manageProduct.products)

  function renderProductsHanler(itemData) {
    return (
      <MyProductCard
        name={itemData.item.productName}
        picture={itemData.item.picture}
        price={itemData.item.price}
        productid={itemData.item.productId}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={selectedStoreProducts}
        keyExtractor={(item) => item.productId}
        renderItem={renderProductsHanler}
      />
    </View>
  );
}

export default MyProductsListScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        margin: 10
    }
});
