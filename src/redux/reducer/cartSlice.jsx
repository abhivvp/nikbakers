import { createSlice } from "@reduxjs/toolkit";

// initial state for cart 
const initialState = {
    products: [],
    total: 0
};

// creating an cartslice fro cart state management
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
          
    }
});
export const {} = cartSlice.actions; 
export default cartSlice.reducer