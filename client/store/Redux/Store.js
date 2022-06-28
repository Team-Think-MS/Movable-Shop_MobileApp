import { configureStore } from "@reduxjs/toolkit";
import { cartListReducers } from "./cartList-slice";
import { isAuthReducers } from "./isAuth-slice";
import { manageProductReducer } from "./manageProduct-slice";
import { wishListReducers } from "./wishList-slice";


const store = configureStore({
    reducer: {
        wishList: wishListReducers,
        manageProduct: manageProductReducer,
        cartList: cartListReducers,
        isAuth : isAuthReducers
    }
})

export default store;