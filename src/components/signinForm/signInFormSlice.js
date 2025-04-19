import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("signInForm/loginUser",

    async ({ email, password }, { rejectWithValue }) => {
        
        let signInData = {
            "email" : email,
            "password" : password
        }

        signInData = JSON.stringify(signInData)

      try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: signInData
        });
  
        if (response.status === 200) {
          const data = await response.json();
          return data.body.token;
        } else {
          return rejectWithValue("Invalid credentials");
        }
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
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
        InputedEmail : (state , action) => {
            state.email = action.payload
        },
        InputedPassword : (state , action) => {
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
export const {InputedEmail,InputedPassword,resetSignInForm} = signInFormSlice.actions