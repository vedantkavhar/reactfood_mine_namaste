import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore= configureStore({
    //main reducer contains small reducers of slices
    reducer:{
        cart: cartReducer ,
    }
})

export default appStore;