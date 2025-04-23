// Fonction permettant de faire une requête pour login l'user en récupérant le token
export async function requestSignInUser ({ email, password },{rejectWithValue}) {
    
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
    })

    if (response.status === 200) {
      const data = await response.json()
      sessionStorage.setItem("authToken",data.body.token)
      return 
    } else {
      return rejectWithValue("Invalid credentials")
    }
  } catch (error) {
    return rejectWithValue(error.message)
  }

}

// Fonction permettant de faire une requête pour récupérer les infos sur l'user en utilisant le token
export async function requestUserInfo (token,{rejectWithValue}) {
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

// Fonction permettant de faire une requête en utilisant le token pour mettre à jour le username du user
export async function requestUserNameUpdate ({token,inputUserName},{rejectWithValue}) {

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
            return rejectWithValue(error.message)
        }
}