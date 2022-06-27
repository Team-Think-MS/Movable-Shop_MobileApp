import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MyProductCard from "../component/MyProductCard";
import {  useEffect } from 'react';
import { getProductByStoreId, updateProduct } from "../util/http/product";
import { manageProductActions } from "../store/Redux/manageProduct-slice";
 
function MyProductsListScreen() {
 const selectedStoreProducts = useSelector((state)=>state.manageProduct.products);
 const dispatch = useDispatch();

 useEffect(() => {
   async function getProducts() {
     try {
       const pdt = await getProductByStoreId();
       dispatch(manageProductActions.setProducts({data : pdt }));
     } catch (error) {
       console.log(error);
     }
   }
   getProducts();
 }, []);


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
