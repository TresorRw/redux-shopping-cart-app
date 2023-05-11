import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: CartSlice.reducer
    }
})

export default store;