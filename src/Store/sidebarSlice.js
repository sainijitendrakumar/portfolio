import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isBarOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isBarOpen = !state.isBarOpen
        }
    }
})

export const {toggleMenu} = sidebarSlice.actions;

export default sidebarSlice.reducer;