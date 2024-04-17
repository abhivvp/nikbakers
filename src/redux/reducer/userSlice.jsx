// creating an slice for user state management

import { createSlice } from "@reduxjs/toolkit";

// initial state for the user state
const initialState = {
    user:null,
    isLoggedIn:false,
    isAdmin:false,
    token:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
     logIn:(state,actions)=>{console.log("user logged in successfully")},
     logOut:(state,actions)=>{console.log("user logged out successfully")},
    },
    extraReducers:(builder)=>{}
});

// exporting the user slice acrtions or reducer functions  
export  const {logIn,logOut} = userSlice.actions;
// exporting the user reducer
export default userSlice.reducer;