import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk("userPage/fetchUser",

    async (token,{rejectWithValue}) => {
        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/profile",{
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            })

            if (response.status === 200) {

                await new Promise(resolve => setTimeout(resolve, 1000))
                const data = await response.json()
                return data.body

            } else {

                await new Promise(resolve => setTimeout(resolve, 1000))
                return rejectWithValue("Failed to fetch user data")
                
            } 

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
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