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
        token : null,
        error : null
    },
    reducers : {
        inputedEmail : (state , action) => {
            state.email = action.payload
        },
        inputedPassword : (state , action) => {
            state.password = action.payload
        },
        resetSignInForm : (state) => {
            state.token = null
            state.error = null
            state.email = ""
            state.password = ""
        }
    },
    extraReducers : (builder) => {
        builder.addCase(loginUser.fulfilled, (state,action) => {
            state.token = action.payload
            state.email=""
            state.password=""
            state.error=null
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