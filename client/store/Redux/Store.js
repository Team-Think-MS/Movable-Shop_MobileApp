import { configureStore } from "@reduxjs/toolkit";
import { manageProductReducer } from "./manageProduct-slice";
import { wishListReducers } from "./wishList-slice";


const store = configureStore({
    reducer: {
        wishList: wishListReducers,
        manageProduct: manageProductReducer
    }
})

export default store;