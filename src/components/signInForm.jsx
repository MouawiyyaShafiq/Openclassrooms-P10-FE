import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function SignInForm (){

    useEffect(()=>{
        sessionStorage.removeItem("authToken")
    },[])

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorBoxDisplay, setErrorBoxDisplay]= useState(true)

    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()

        let signInData = {
            "email" : username,
            "password" : password
        }

        signInData = JSON.stringify(signInData)
        
        try {

            const response = await fetch ("http://localhost:3001/api/v1/user/login",{
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : signInData
            })
            
            if (response.status === 200) {
                
                const user = await response.json()
                const token = user.body.token

                sessionStorage.setItem("authToken", token)
                setErrorBoxDisplay(true)
                setUsername("")
                setPassword("")
                navigate("/user")

            } else {

                throw new Error()
                
            } 

        } catch (error) {
            console.error("fail",error.message)
            setErrorBoxDisplay(false)
            setUsername("")
            setPassword("")
        }
        
    }

    return (
        <form onSubmit={submit}>
            {errorBoxDisplay == false ? 
                <div className="sign-in-content-errorBox">Username or password incorrect please try again</div> 
                : null
            }
            <div className="sign-in-content-input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                />
            </div>
            <div className="sign-in-content-input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>
            <div className="sign-in-content-input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-content-button">Sign In</button>
        </form>
    )

}

export default SignInForm