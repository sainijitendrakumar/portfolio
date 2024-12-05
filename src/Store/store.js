import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice.js"
import videoDetailsSlice from './projectDetail.js'

const store = configureStore({
    reducer:{
        sidebar:sidebarSlice,
        videoDetails:videoDetailsSlice
    } 
})

export default store;