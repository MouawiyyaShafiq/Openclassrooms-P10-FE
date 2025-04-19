import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateUserName = createAsyncThunk("userNameForm/updateUserName",

    async ({token,inputUserName},{rejectWithValue}) => {

        let updateData = JSON.stringify({ "userName": inputUserName }) 

        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/profile",{
            method : "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body : updateData
            })

            if (response.status === 200) {

                return 

            } else {

                return rejectWithValue("Failed to update user name")
                
            } 

        } catch (error) {
            return rejectWithValue(error.message);
        }

    }

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