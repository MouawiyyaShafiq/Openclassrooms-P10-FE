import SignInForm from "../components/signinForm/signInForm"
import { resetSignInForm } from "../components/signinForm/signInFormSlice"
import { resetUser } from "./userPage/userPageSlice"
import { resetUserNameForm } from "../components/userNameForm/userNameFormSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function SignInPage () {

    const dispatch = useDispatch()

    // UseEffect permettant de reset le state au render du homepage
    useEffect(() => {
        dispatch(resetSignInForm())
        dispatch(resetUser())
        dispatch(resetUserNameForm())
        sessionStorage.removeItem("authToken")
    },[])
    
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-content-icon"></i>
                <h1>Sign In</h1>
                <SignInForm/>
            </section>
        </main>
    )
}

export default SignInPage