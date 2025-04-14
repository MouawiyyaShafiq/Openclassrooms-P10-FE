function SignInForm (){

    return (
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
            <button className="sign-in-content-button">Sign In</button>
        </form>
    )

}

export default SignInForm