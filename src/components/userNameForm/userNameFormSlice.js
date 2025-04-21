import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requestUserNameUpdate } from "../../apiCalls"

export const updateUserName = createAsyncThunk("userNameForm/updateUserName",

    ({token,inputUserName},{rejectWithValue}) => requestUserNameUpdate({token,inputUserName},{rejectWithValue})

)

const userNameFormSlice = createSlice({
    name : "userNameForm",
    initialState:{
        inputUserName : null,
        displayed : false,
        error : null

    },
    reducers : {
        inputedUserName : (state,action)=>{
            state.inputUserName = action.payload
        },
        displayed : (state,action)=>{
            state.displayed = action.payload
        },
        resetUserNameForm : (state)=>{
            state.inputUserName = null
            state.displayed = false
            state.error =  null
        }
    },
    extraReducers : (builder) => {
        builder.addCase(updateUserName.fulfilled, (state)=>{
            state.displayed = false
            state.error=null
        })
        builder.addCase(updateUserName.rejected, (state,action)=>{
            state.error = action.payload
        })
    }
})

export default userNameFormSlice
export const {inputedUserName,displayed,resetUserNameForm} = userNameFormSlice.actions