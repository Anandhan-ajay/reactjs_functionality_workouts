import { configureStore } from "@reduxjs/toolkit";
import usersLists from "../slices/userSlice.js"; 

const store = configureStore({
    reducer: {
        usersInfo: usersLists,
    }
})

export default store;