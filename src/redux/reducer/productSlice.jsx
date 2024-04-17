// creating an slice for product state management 

import { createSlice } from "@reduxjs/toolkit";

// initialstate for productslice
const initialState = {
    products:[],
}
const productSlice = createSlice({
  name: "product",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
    }
});

export const { } = productSlice.actions;
export default productSlice.reducer;