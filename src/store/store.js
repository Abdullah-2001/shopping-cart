import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./dataSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})