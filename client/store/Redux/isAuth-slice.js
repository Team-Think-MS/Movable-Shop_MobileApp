import { createSlice } from "@reduxjs/toolkit";

const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState: {
        authState : {}
    },
    reducers : {
        setAuth(state, action) {
            state.authState = action.payload.data;
        },
        removeAuth(state, action) {
            state.authState = {}
        }
    }
})

export const isAuthActions = isAuthSlice.actions;
export const isAuthReducers = isAuthSlice.reducer;