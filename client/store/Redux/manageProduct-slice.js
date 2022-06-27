import { createSlice } from "@reduxjs/toolkit";

const manageProductSlice = createSlice({
  name: "manageProduct",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct(state, action) {
      const newProduct = {
        productId: action.payload.id,
        storeId: "6",
        stockQty: action.payload.data.stockQty,
        picture: action.payload.lk,
        productName: action.payload.data.productName,
        price: action.payload.data.price,
        description: action.payload.data.description,
      };
      state.products.push(newProduct);
    },
    updateProduct(state, action) {
      const updatableProductIndex = state.products.findIndex(
        (product) => product.productId === action.payload.id
      );

      state.products[updatableProductIndex].productName =
        action.payload.data.productName;
      state.products[updatableProductIndex].description =
        action.payload.data.description;
      state.products[updatableProductIndex].price = action.payload.data.price;
    },
    deletProduct(state, action) {
      const index = state.products.findIndex(
        (product) => product.productId === action.payload.id
      );
      state.products.splice(index, 1);
    },
    setProducts(state, action) {
      state.products = action.payload.data;
    },
  },
});

export const manageProductActions = manageProductSlice.actions;
export const manageProductReducer = manageProductSlice.reducer;
