import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requestSignInUser } from "../../apiCalls"

export const loginUser = createAsyncThunk("signInForm/loginUser",
    ({ email, password }, { rejectWithValue }) => requestSignInUser({ email, password }, { rejectWithValue })
)

const signInFormSlice = createSlice({
    name : "signInForm",
    initialState : {
        email : "",
        password : "",
        error : null,
        token : sessionStorage.getItem("authToken")?sessionStorage.getItem("authToken"):null
    },
    reducers : {
        inputedEmail : (state , action) => {
            state.email = action.payload
        },
        inputedPassword : (state , action) => {
            state.password = action.payload
        },
        resetSignInForm : (state) => {
            state.error = null
            state.email = ""
            state.password = ""
            state.token = sessionStorage.getItem("authToken")?sessionStorage.getItem("authToken"):null
        }
    },
    extraReducers : (builder) => {
        builder.addCase(loginUser.fulfilled, (state,action) => {
            state.email=""
            state.password=""
            state.error=null
            state.token = action.payload
            sessionStorage.setItem("authToken",action.payload)
        }),
        builder.addCase(loginUser.rejected, (state,action) => {
            state.error = action.payload
            state.email=""
            state.password=""
        })
    }
})

export default signInFormSlice
export const {inputedEmail,inputedPassword,resetSignInForm} = signInFormSlice.actions