import { useDispatch, useSelector } from "react-redux"
import { inputedUserName, resetUserNameForm, updateUserName } from "./userNameFormSlice"
import { setUserName } from "../../pages/userPage/userPageSlice"

function UserNameForm () {

    const dispatch = useDispatch()
    const token = sessionStorage.getItem("authToken")
    const userName = useSelector((state)=>state.userPage.userName)
    const firstName = useSelector((state)=>state.userPage.firstName)
    const lastName = useSelector((state)=>state.userPage.lastName)
    const inputUserName = useSelector((state)=>state.userNameForm.inputUserName)
    const error = useSelector((state)=>state.userNameForm.error)

    // Fonction appelée au click sur le bouton save 
    // permettant d'appeler l'action qui met à jour l'username sur l'api

    const handelSubmit = async (e) => {
        e.preventDefault()

        const result = await dispatch(updateUserName({token,inputUserName}))
        
        if(updateUserName.fulfilled.match(result)){
            dispatch(setUserName(inputUserName))
            dispatch(inputedUserName(null))
        }
    }

     return (
        <>
            <h1>Edit User Info</h1>
            <form onSubmit={handelSubmit} className="header-editForm">
                <div className="header-editForm-inputWrapper">
                    <label htmlFor="userName">User name : </label>
                    <input type="text" id="userName" placeholder={userName}
                        onChange={(e)=>{dispatch(inputedUserName(e.target.value))}}
                    />
                </div>
                <div className="header-editForm-inputWrapper">
                    <label htmlFor="firstName">First name : </label>
                    <input type="text" id="firstName" placeholder={firstName} disabled/>
                </div>
                <div className="header-editForm-inputWrapper">
                    <label htmlFor="lastName">Last name : </label>
                    <input type="text" id="lastName" placeholder={lastName} disabled/>
                </div>
                <div className="header-editForm-buttons">
                    <button 
                        className="header-editForm-buttons-button" 
                        type="submit" 
                        disabled={!inputUserName || inputUserName === userName}
                        >Save</button>
                    <button 
                        className="header-editForm-buttons-button" 
                        type= "button" 
                        onClick={()=>{dispatch(resetUserNameForm())}}  
                        >Cancel</button> 
                </div>  
            </form>
            {!error ? null
            :
            <div className="header-errorBox">Failed to update user name please try again later</div> 
            }
        </>
     )
}

export default UserNameForm