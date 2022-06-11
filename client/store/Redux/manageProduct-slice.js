import { createSlice } from "@reduxjs/toolkit";

const manageProductSlice = createSlice({
  name: "manageProduct",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct(state, action) {
      const newProduct = {
        productId: new Date().toString() + Math.random().toString(),
        storeId: "s1",
        stockQty: "6",
        picture:
          "https://attelagediscount.fr/38349-thickbox_default/test-product.jpg",
        productName: action.payload.productName,
        price: action.payload.price,
        description: action.payload.description,
      };
      state.products.push(newProduct);
    },
    updateProduct(state, action) {
      const updatableProductIndex = state.products.findIndex(
        (product) => product.productId === action.payload.id
      );
      
      state.products[updatableProductIndex].productName = action.payload.data.productName;
      state.products[updatableProductIndex].description = action.payload.data.description;
      state.products[updatableProductIndex].price = action.payload.data.price;
    },
    deletProduct() {},
  },
});

export const manageProductActions = manageProductSlice.actions;
export const manageProductReducer = manageProductSlice.reducer;
