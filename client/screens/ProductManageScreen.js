import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "../component/ProductManage/ProductForm";
import SecondaryButton from "../component/UI/SecondaryButton";
import { manageProductActions } from "../store/Redux/manageProduct-slice";
import { deleteProduct, storeProduct, updateProduct } from "../util/http/product";

const axios = require('axios').default;

function ProductManageScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const productsss = useSelector((state) => state.manageProduct.products);
  const editedProductId = route.params?.id;
  const isEditingProduct = !!editedProductId;

  const selectedProduct = productsss.find(
    (product) => product.productId === editedProductId
  );

  function cancelHandler() {
    navigation.goBack();
  }
  async function submitHandler({productData, lk}) {
    if (isEditingProduct) {
      await updateProduct({productData, lk, editedProductId})
      dispatch(
        manageProductActions.updateProduct({ id: editedProductId , data: productData})
      );
    } else {
      const id = await storeProduct({productData, lk});
      dispatch(manageProductActions.addProduct({data : productData , id: id, lk : lk}));
    };

    navigation.goBack();
  }
async function deleteHandler() {
      await deleteProduct({editedProductId});
      dispatch(
        manageProductActions.deletProduct({id: editedProductId})
      );
    navigation.goBack();
  }

  useLayoutEffect(() => {
    if (isEditingProduct) {
      navigation.setOptions({
        title: "Edit Product",
        headerRight: false,
      });
    } else {
      navigation.setOptions({
        title: "List a New Item",
        headerRight: false,
      });
    }
  }, [navigation, isEditingProduct]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.form}>
        <ProductForm
          defaultInputData={selectedProduct}
          submitButtonLabel={isEditingProduct ? "Save" : "Publish the product"}
          onSubmit={submitHandler}
        />
      </View>
      <View style={styles.footer}>
        {!isEditingProduct && (
        <View style={styles.buttonContainer}>
          <SecondaryButton children={"Cancel"} onPress={cancelHandler} />
        </View>
      )}
      {isEditingProduct && (
        <View style={styles.buttonContainer}>
          <SecondaryButton children={"Delete"} onPress={deleteHandler}/>
          <SecondaryButton children={"Cancel"} onPress={cancelHandler} />
        </View>
      )}
      </View>
    </View>
  );
}

export default ProductManageScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 60,
  },
  buttonContainer: {
    alignItems: "center",
  },
  form: {
    flex: 6
  },
  footer: {
    flex: 1
  }
});
