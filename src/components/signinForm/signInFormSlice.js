import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requestSignInUser } from "../../apiCalls"

export const loginUser = createAsyncThunk("signInForm/loginUser",
    ({ email, password }, { rejectWithValue }) => requestSignInUser({ email, password }, { rejectWithValue })
)

const signInFormSlice = createSlice({
    name : "signInForm",
    initialState : {
        token : sessionStorage.getItem("authToken")?sessionStorage.getItem("authToken"):null
    },
    reducers : {
        resetSignInForm : (state) => {
            state.token = null
        }
    },
    extraReducers : (builder) => {
        builder.addCase(loginUser.fulfilled, (state,action) => {
            state.token = action.payload
            sessionStorage.setItem("authToken",action.payload)
        })
    }
})

export default signInFormSlice
export const {inputedEmail,inputedPassword,resetSignInForm} = signInFormSlice.actions