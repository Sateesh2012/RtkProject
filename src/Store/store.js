import {configureStore} from "@reduxjs/toolkit";
import caetReducer from "./CartSlice"
import ProductReducer from "./productSlice"

const store = configureStore({
    reducer:{
        cart:caetReducer,
        product:ProductReducer,
    }
})

export default store;