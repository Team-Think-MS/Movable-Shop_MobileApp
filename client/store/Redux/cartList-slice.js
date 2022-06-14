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
                totalPrice: action.payload.totPrice
            }
            state.cartProduct.push(newItem);
        },
        removeProductCart(state, action) {
            state.cartProduct.splice(state.cartProduct.indexOf(action.payload.id), 1)
        },
        updateProductCart(state, action) {
            console.log(action.payload.id)
            const updatableProductIndex = state.cartProduct.findIndex(
                (product) => product.productId === action.payload.id
              );
              
              state.cartProduct[updatableProductIndex].quantity = action.payload.qnty;
        }
    }
})

export const cartListReducers = cartListSlice.reducer;
export const cartListActions = cartListSlice.actions;