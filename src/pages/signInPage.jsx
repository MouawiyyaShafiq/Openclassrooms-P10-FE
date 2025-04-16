import SignInForm from "../components/signInForm"
import Header from "../components/header"
import Footer from "../components/footer"

function SignInPage () {
    return (
        <>
        <Header/>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-content-icon"></i>
                <h1>Sign In</h1>
                <SignInForm/>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default SignInPage