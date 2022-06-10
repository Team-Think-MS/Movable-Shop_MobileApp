import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "../component/ProductManage/ProductForm";
import PrimaryButton from "../component/UI/PrimaryButton";
import SecondaryButton from "../component/UI/SecondaryButton";
import { PRODUCTS } from "../data/dummy-data";
import { manageProductActions } from "../store/Redux/manageProduct-slice";

function ProductManageScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const productsss = useSelector((state) => state.manageProduct.products);
  const editedProductId = route.params?.id;
  const isEditingProduct = !!editedProductId;

  const selectedProduct = PRODUCTS.find(
    (product) => product.productId === editedProductId
  );

  function cancelHandler() {
    
    navigation.goBack();
  }

  function addProductHandler() {
    dispatch(
      manageProductActions.addProduct({
        productName: "test",
        price: "10.99",
        description: "test Description",
      })
    );

    console.log(productsss);

    navigation.goBack();
  }

  useLayoutEffect(() => {
    if (isEditingProduct) {
      navigation.setOptions({
        title: "Edit Product",
      });
    } else {
      navigation.setOptions({
        title: "List a New Item",
      });
    }
  }, [navigation, isEditingProduct]);

  return (
    <View style={styles.rootContainer}>
      <View>
        <ProductForm defaultInputData={selectedProduct} />
      </View>
      {!isEditingProduct && (
        <View style={styles.buttonContainer}>
          <PrimaryButton
            children={"Publish the product"}
            onPress={addProductHandler}
          />
          <SecondaryButton children={"Cancel"} onPress={cancelHandler} />
        </View>
      )}
      {isEditingProduct && (
        <View style={styles.buttonContainer}>
          <PrimaryButton children={"Save"} />
          <SecondaryButton children={"Delete"} />
          <SecondaryButton children={"Cancel"} onPress={cancelHandler} />
        </View>
      )}
    </View>
  );
}

export default ProductManageScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 80,
  },
  buttonContainer: {
    alignItems: "center",
  },
});
