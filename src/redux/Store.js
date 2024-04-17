// creating an store for the state management 

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice";
import productSlice from "./reducer/productSlice";
import cartSlice from "./reducer/cartSlice";

const store = configureStore({
    reducer: {
        user:userSlice,
        product:productSlice,
        cart:cartSlice
    }
});


export default store;