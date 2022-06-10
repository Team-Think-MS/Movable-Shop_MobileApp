import { createSlice } from "@reduxjs/toolkit";

const manageProductSlice = createSlice({
  name: "manageProduct",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct(state, action) {
       
        const newProduct = { 
            productId : 'p56',
            storeId : 's1',
            stockQty : '6',
            picture : 'https://attelagediscount.fr/38349-thickbox_default/test-product.jpg',
            productName : action.payload.productName,
            price: action.payload.price,
            description: action.payload.description
        }; 
        state.products.push(newProduct)
    },
    updateProduct() {},
    deletProduct() {},
  },
});

export const manageProductActions = manageProductSlice.actions;
export const manageProductReducer = manageProductSlice.reducer;