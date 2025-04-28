import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { inputedEmail,inputedPassword, loginUser} from "./signInFormSlice"
import { useState } from "react"

function SignInForm (){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("") 
    const [password, setpassword] = useState("") 
    const [error, seterror] = useState(null) 

    // Fonction appelée au click sur le bouton signIn
    // permettant d'appeler l'action qui envoie les données de login a l'api pour récupérer le token
    
    const handelSubmit = async (e) => {
        e.preventDefault()

        const result = await dispatch(loginUser({email,password}))
        
        if(loginUser.fulfilled.match(result)){
            navigate("/user")
            setEmail("")
            setpassword("")
            seterror(false)
        }else{
            setEmail("")
            setpassword("")
            seterror(true)
        }
    }

    return (
        <form onSubmit={handelSubmit}>
            {!error ? null
            : 
                <div className="sign-in-content-errorBox">Username or password incorrect please try again</div>  
            }
            <div className="sign-in-content-input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="sign-in-content-input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}
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