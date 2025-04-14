import { NavLink } from "react-router-dom"

function SignInPage () {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-content-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="sign-in-content-input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="sign-in-content-input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="sign-in-content-input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    /* PLACEHOLDER DUE TO STATIC SITE */
                    <NavLink to="/user/0" className="sign-in-content-button">Sign In</NavLink>
                    /* SHOULD BE THE BUTTON BELOW */
                    /* <button className="sign-in-content-button">Sign In</button> */
                    /*  */
                </form>
            </section>
        </main>
    )
}

export default SignInPage