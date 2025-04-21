import { configureStore } from "@reduxjs/toolkit"
import signInFormSlice from "./components/signinForm/signInFormSlice"
import userPageSlice from "./pages/userPage/userPageSlice"
import userNameFormSlice from "./components/userNameForm/userNameFormSlice"

const store = configureStore({
    reducer : {
        signInForm : signInFormSlice.reducer,
        userPage : userPageSlice.reducer,
        userNameForm : userNameFormSlice.reducer
    }
})

export default store