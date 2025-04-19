import { useEffect, useState } from "react"
import Account from "../../components/account"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser, updateUserInfo } from "./userPageSlice"
import UserNameForm from "../../components/userNameForm/userNameForm"
import { displayed } from "../../components/userNameForm/userNameFormSlice"

function UserPage () {

    const dispatch = useDispatch()
    const token = useSelector((state)=>state.signInForm.token)
    const user = useSelector((state)=>state.userPage.user)
    const error = useSelector((state)=>state.userPage.error)
    const firstName = useSelector((state)=>state.userPage.firstName)
    const lastName = useSelector((state)=>state.userPage.lastName)
    const editMode = useSelector((state)=>state.userNameForm.displayed)

    useEffect(()=>{

        const getUser = async () => {

            const result = await dispatch(fetchUser(token))

            if (fetchUser.fulfilled.match(result)){
                dispatch(updateUserInfo())
            } 
        }

        if(token){
          getUser();  
        }

    },[token,dispatch])


    return (

        !user ? 
        
        <main className="main bg-dark">
            <div className="header">
                <h1>Retrieving user information <br/> please wait...</h1>
                {!error ? null
                : <div className="header-errorBox">Failed to fetch user data please try again later</div>
                }
            </div>
        </main>
            
        :
        
        <main className="main bg-dark">
            <div className="header">
                {editMode==false ?
                <>
                    <h1>Welcome back<br />{firstName + " " + lastName + " !"}</h1>
                    <button onClick={()=>{dispatch(displayed(true))}} className="header-edit-button">Edit Name</button>
                </>
                :
                    <UserNameForm/>
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
       
    )
            
}

export default UserPage