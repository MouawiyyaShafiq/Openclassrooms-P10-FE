import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { inputedEmail,inputedPassword, loginUser} from "./signInFormSlice"

function SignInForm (){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state)=> state.signInForm)
    const email = state.email
    const password = state.password
    const error = state.error

    // Fonction appelée au click sur le bouton signIn
    // permettant d'appeler l'action qui envoie les données de login a l'api pour récupérer le token
    
    const handelSubmit = async (e) => {
        e.preventDefault()

        const result = await dispatch(loginUser({email,password}))
        
        if(loginUser.fulfilled.match(result)){
            navigate("/user")
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
                    onChange={(e)=>{dispatch(inputedEmail(e.target.value))}}
                />
            </div>
            <div className="sign-in-content-input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password}
                    onChange={(e)=>{dispatch(inputedPassword(e.target.value))}}
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