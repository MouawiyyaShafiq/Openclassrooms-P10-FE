import { NavLink } from "react-router-dom"
import SignInForm from "../components/signInForm"

function SignInPage () {
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