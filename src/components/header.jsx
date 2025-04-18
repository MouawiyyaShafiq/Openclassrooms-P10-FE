import { NavLink } from "react-router-dom"
import logo from "../img/argentBankLogo.png"
import { useDispatch } from "react-redux"
import { emptyError, emptyToken } from "./signinForm/signInFormSlice"

function Header ({token, userName}) {

    const dispatch = useDispatch()

    return (
        <nav className="main-nav">
            <NavLink onClick={()=>{dispatch(emptyToken());dispatch(emptyError())}} className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {!token ?
                <div>
                    <NavLink onClick={()=>{dispatch(emptyToken());dispatch(emptyError())}} className="main-nav-item" to="/signIn">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </NavLink>
                </div>
            :   
                <div>
                    <div>
                        <a href="#" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userName}
                        </a>
                    </div>
                    <div>
                        <NavLink onClick={()=>{dispatch(emptyToken())}} className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                        </NavLink>
                    </div>
                </div>
                
            }
            
        </nav>
    )
}

export default Header