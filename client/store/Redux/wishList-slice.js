import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: {
        productIds : []
    },
    reducers : {
        addProductWishList(state, action) {
            state.productIds.push(action.payload.id)
        },
        removeProductWishList(state, action) {
            state.productIds.splice(state.productIds.indexOf(action.payload.id), 1)
        }
    }
})

export const wishListActions = wishListSlice.actions;
export const wishListReducers = wishListSlice.reducer;