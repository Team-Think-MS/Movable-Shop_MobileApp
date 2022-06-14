import { configureStore } from "@reduxjs/toolkit";
import { cartListReducers } from "./cartList-slice";
import { manageProductReducer } from "./manageProduct-slice";
import { wishListReducers } from "./wishList-slice";


const store = configureStore({
    reducer: {
        wishList: wishListReducers,
        manageProduct: manageProductReducer,
        cartList: cartListReducers,
    }
})

export default store;