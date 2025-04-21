import { NavLink } from "react-router-dom"
import logo from "../img/argentBankLogo.png"
import { useSelector } from "react-redux"


function Header () {

    const token = sessionStorage.getItem("authToken")
    const userName = useSelector((state)=>state.userPage.userName)

    return (
        <nav className="main-nav">
            <NavLink 
                className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {!token ?
                <div>
                    <NavLink  
                    className="main-nav-item" to="/signIn">
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
                        <NavLink 
                        className="main-nav-item" to="/">
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