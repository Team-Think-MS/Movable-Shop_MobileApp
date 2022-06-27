import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constant/Styles";
import { useLayoutEffect, useEffect, useState } from "react";
import ProductCard from "../component/ProductList/ProductCard";
import { fetchProducts } from "../util/http/product";

function StoreDetailsScreen({ navigation, route }) {
  const selectedStoreId = route.params.storeID;
  const selectedStoreName = route.params.storeName;
  const selectedStoreDescription = route.params.description;
  const selectedStorePicture = route.params.picture;

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
  }, [navigation]);

  const selectedStoreProducts = productData.filter(
    (product) => product.storeId === selectedStoreId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedStoreName,
    });
  }, [navigation]);

  function renderProducts(itemData) {
    return (
      <ProductCard
        picture={itemData.item.picture}
        title={itemData.item.productName}
        price={itemData.item.price}
        productid={itemData.item.productId}
        description={itemData.item.description}
        storeId={itemData.item.storeId}
      />
    );
  }

  return (
    <FlatList
      ListHeaderComponent={() => (
        <View style={styles.rootContainer}>
          <View style={styles.imageOuterContainer}>
            <Image
              source={{ uri: selectedStorePicture }}
              style={styles.image}
            />
          </View>
          <View style={styles.descriptionOuterContainer}>
            <Text style={styles.description}>{selectedStoreDescription}</Text>
          </View>
          <View style={styles.rating}>
            <Ionicons name="md-star-sharp" size={20} color="black" />
            <Ionicons name="md-star-sharp" size={20} color="black" />
            <Ionicons name="md-star-sharp" size={20} color="black" />
            <Ionicons name="md-star-sharp" size={20} color="black" />
            <Ionicons name="star-half-sharp" size={20} color="black" />
            <Text style={styles.ratingText}>(17)</Text>
          </View>
          <View style={styles.ourProducts}>
            <Text style={styles.ourProductsText}>Our products</Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
      )}
      data={selectedStoreProducts}
      renderItem={renderProducts}
      keyExtractor={(item) => item.productId}
      numColumns={2}
    />
  );
}

export default StoreDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {},
  imageOuterContainer: {},
  image: {
    width: "100%",
    height: 250,
  },
  description: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  descriptionOuterContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.gray200,
  },
  ourProducts: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ourProductsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 15,
  },
  rating: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
  },
});
