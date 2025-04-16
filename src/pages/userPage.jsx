import { useEffect, useState } from "react"
import Account from "../components/account"
import Header from "../components/header"
import Footer from "../components/footer"

function UserPage () {

    const [token, setToken] = useState()
    const [user, setUser] = useState()
    const [userName, setUserName] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [editMode, setEditMode] = useState(false)
    const [fetchUserFailed,  setFetchUserFailed] = useState(false)
    const [updateUserFailed,  setUpdateUserFailed] = useState(false)

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
                }, 500);

            } else {

                throw new Error()
                
            } 

        } catch (error) {
            console.error("fail",error.message)
            setFetchUserFailed(true)
        }
    }

    useEffect(()=>{
        setToken(sessionStorage.getItem("authToken"))
    }, [])

    useEffect(()=>{

        if (!token) return
        fetchUser()
        
    }, [token])

    useEffect(()=>{

        if (!user) return

        setFirstName(user.body.firstName)
        setLastName(user.body.lastName)
        setUserName(user.body.userName)
        
    }, [user])

    async function updateUser(e) {

        e.preventDefault()

        let updateData = JSON.stringify({ "userName": userName }) 

        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/profile",{
            method : "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body : updateData
            })

            if (response.status === 200) {

                fetchUser()
                setEditMode(false)

            } else {

                throw new Error()
                
            } 

        } catch (error) {
            console.error("fail",error.message)
            setUpdateUserFailed(true)
        }
    }

    return (

        !user ? 
        <>
            <Header/>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Retrieving user information <br/> please wait...</h1>
                        {fetchUserFailed == true ?
                        <div className="header-errorBox">Failed to fetch user data please try again later</div> 
                        : null
                        }
                    </div>
                </main>
            <Footer/>
        </>
        :
        <>
            <Header 
            token={token}
            userName={user.body.userName}
            />
            <main className="main bg-dark">
                <div className="header">
                    {editMode===false ?
                    <>
                        <h1>Welcome back<br />{firstName + " " + lastName + " !"}</h1>
                        <button onClick={()=>{setEditMode(true)}} className="header-edit-button">Edit Name</button>
                    </>
                    :
                    <>
                        <h1>Edit User Info</h1>
                        <form onSubmit={updateUser} className="header-editForm">
                            <div className="header-editForm-inputWrapper">
                                <label htmlFor="userName">User name : </label>
                                <input type="text" id="userName" value={userName}
                                    onChange={(e)=>{setUserName(e.target.value)}}
                                />
                            </div>
                            <div className="header-editForm-inputWrapper">
                                <label htmlFor="firstName">First name : </label>
                                <input type="text" id="firstName" value={firstName} disabled/>
                            </div>
                            <div className="header-editForm-inputWrapper">
                                <label htmlFor="lastName">Last name : </label>
                                <input type="text" id="lastName" value={lastName} disabled/>
                            </div>
                            <div className="header-editForm-buttons">
                                <button 
                                    className="header-editForm-buttons-button" 
                                    type="submit" 
                                    disabled={!userName || userName === user.body.userName}
                                    >Save</button>
                                <button 
                                    className="header-editForm-buttons-button" 
                                    type= "button" 
                                    onClick={()=>{
                                    setEditMode(false)
                                    setUserName(user.body.userName)
                                    }}  
                                    >Cancel</button> 
                            </div>  
                        </form>
                        {updateUserFailed == true ?
                        <div className="header-errorBox">Failed to update user name please try again later</div> 
                        : null
                        }
                    </>
                    }
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