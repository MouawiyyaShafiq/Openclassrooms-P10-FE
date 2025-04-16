import { NavLink } from "react-router-dom"
import logo from "../img/argentBankLogo.png"

function Header ({token, userFirstName}) {
    return (
        <nav className="main-nav">
            <NavLink onClick={()=>{sessionStorage.removeItem("authToken")}} className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {!token ?
                <div>
                    <NavLink className="main-nav-item" to="/signIn">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </NavLink>
                </div>
            :   
                <div>
                    <div>
                        <a href="#" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userFirstName}
                        </a>
                    </div>
                    <div>
                        <NavLink onClick={()=>{sessionStorage.removeItem("authToken")}} className="main-nav-item" to="/">
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