import { useEffect, useState } from "react"
import Account from "../components/account"
import Header from "../components/header"
import Footer from "../components/footer"

function UserPage () {

    const [token, setToken] = useState()
    const [user, setUser] = useState()

    useEffect(()=>{
        setToken(sessionStorage.getItem("authToken"))
    }, [])

    useEffect(()=>{

        if (!token) return

        async function fetchUser() {
            try {
                const response = await fetch ("http://localhost:3001/api/v1/user/profile",{
                method : "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                })

                if (response.status === 200) {

                    setTimeout(async () => {
                        setUser(await response.json())
                    }, 1500);

                } else {
    
                    throw new Error()
                    
                } 
    
            } catch (error) {
                console.error("fail",error.message)
                
            }
        }
        fetchUser()
        
    }, [token])

    return (

        !user ? 
        <>
        <Header/>
        <main className="main bg-dark">
        <div className="header">
            <h1>Retrieving user information <br/> please wait...</h1>
        </div>
        </main>
        <Footer/>
        </>
        :
        <>
        <Header 
        token={token}
        userFirstName={user.body.firstName}
        />
        <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br />{user.body.firstName + " " + user.body.lastName + " !"}</h1>
            <button className="header-edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
            title={"Argent Bank Checking (x8349)"}
            amount={"$2,082.79"}
            amountDescription={"Available Balance"}
        />
        <Account
            title={"Argent Bank Savings (x6712)"}
            amount={"$10,928.42"}
            amountDescription={"Available Balance"}
        />
        <Account
            title={"Argent Bank Credit Card (x8349)"}
            amount={"$184.30"}
            amountDescription={"Available Balance"}
        />
        </main>
        <Footer/>
        </>
       
    )
            
}

export default UserPage