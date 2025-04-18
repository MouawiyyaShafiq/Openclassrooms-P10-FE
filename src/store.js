import { configureStore } from "@reduxjs/toolkit";
import signInFormSlice from "./components/signinForm/signInFormSlice";

const store = configureStore({
    reducer : {
        signInForm : signInFormSlice.reducer
    }
})

export default store