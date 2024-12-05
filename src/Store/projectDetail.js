import { createSlice } from "@reduxjs/toolkit";

const projectDetailsSlice = createSlice({
    name:'projectDetails',
    initialState:{
        details:{}
    },
    reducers:{
        getDetails:(state,action)=>{
            state.details = action.payload
        }
    }
})

export const {getDetails} = projectDetailsSlice.actions

export default projectDetailsSlice.reducer
