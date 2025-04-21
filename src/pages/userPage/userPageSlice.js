import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requestUserInfo } from "../../apiCalls"

export const fetchUser = createAsyncThunk("userPage/fetchUser",

    (token,{rejectWithValue}) => requestUserInfo(token,{rejectWithValue})
)

const userPageSlice = createSlice({
    name : "userPage",
    initialState : {
        user : null,
        userName : null,
        firstName : null,
        lastName : null,
        error: null
    },
    reducers : {
        setUserName: (state,action) => {
            state.userName = action.payload
        },
        updateUserInfo : (state) => {
            state.userName = state.user.userName
            state.firstName = state.user.firstName
            state.lastName = state.user.lastName
        },
        resetUser : (state)=>{
            state.user = null
            state.userName = null
            state.firstName = null
            state.lastName = null
            state.error = null
        }

    },

    extraReducers : (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) =>{
            state.user = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) =>{
            state.error = action.payload 
        })
    }
})

export default userPageSlice
export const {updateUserInfo,resetUser,setUserName} = userPageSlice.actions