import { createSlice } from "@reduxjs/toolkit";

const cartListSlice = createSlice({
    name: 'cartlist',
    initialState: {
        cartProduct : [],
    },
    reducers: {
        addProductCart(state, action) {
            const newItem = {
                productId: action.payload.id,
                quantity: action.payload.qnty,
                productName: action.payload.pName,
                totalPrice: action.payload.totPrice,
                storeId: action.payload.strId
            }
            state.cartProduct.push(newItem);
        },
        removeProductCart(state, action) {
            const index = state.cartProduct.findIndex(
                (product) => product.productId === action.payload.id
              );
            state.cartProduct.splice(index, 1);
        },
        updateProductCart(state, action) {
            const updatableProductIndex = state.cartProduct.findIndex(
                (product) => product.productId === action.payload.id
              );
              
              state.cartProduct[updatableProductIndex].quantity = action.payload.qnty;
              state.cartProduct[updatableProductIndex].totalPrice=action.payload.totPrice;
        },
        resetAndAddNewProductCart(state, action) {
            state.cartProduct = [];
            const newItem = {
                productId: action.payload.id,
                quantity: action.payload.qnty,
                productName: action.payload.pName,
                totalPrice: action.payload.totPrice,
                storeId: action.payload.strId
            }
            state.cartProduct.push(newItem);
        },
        resetCart(state, action) {
            state.cartProduct = [];
        }
    }
})

export const cartListReducers = cartListSlice.reducer;
export const cartListActions = cartListSlice.actions;