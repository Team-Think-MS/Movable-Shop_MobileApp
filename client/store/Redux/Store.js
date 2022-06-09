import { configureStore } from "@reduxjs/toolkit";
import { wishListReducers } from "./wishList-slice";


const store = configureStore({
    reducer: {
        wishList: wishListReducers,
    }
})

export default store;