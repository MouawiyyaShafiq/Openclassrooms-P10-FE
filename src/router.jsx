import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage"
import SignInPage from "./pages/signInPage"
import UserPage from "./pages/userPage/userPage"

function Router () {
    return (

        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/signIn" element={<SignInPage/>}></Route>
            <Route path="/user" element={<UserPage/>}></Route>
        </Routes>

    )
}

export default Router