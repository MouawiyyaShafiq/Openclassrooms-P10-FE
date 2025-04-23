import { useDispatch } from "react-redux"
import FeatureItem from "../components/featureItem"
import iconChat from "../img/icon-chat.jpg"
import iconMoney from "../img/icon-money.jpg"
import iconSecurity from "../img/icon-security.jpg"
import { resetSignInForm } from "../components/signinForm/signInFormSlice"
import { resetUser } from "./userPage/userPageSlice"
import { resetUserNameForm } from "../components/userNameForm/userNameFormSlice"
import { useEffect } from "react"

function HomePage () {

    const dispatch = useDispatch()

    // UseEffect permettant de reset le state au render du homepage
    useEffect(() => {
        dispatch(resetSignInForm())
        dispatch(resetUser())
        dispatch(resetUserNameForm())
        sessionStorage.removeItem("authToken")
    },[])

    return (
        <main className="main">
            <div className="hero">
                <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="hero-content-subtitle">No fees.</p>
                <p className="hero-content-subtitle">No minimum deposit.</p>
                <p className="hero-content-subtitle">High interest rates.</p>
                <p className="hero-content-text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureItem 
                    icon={iconChat}
                    type="chat"
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes."
                />
                <FeatureItem 
                    icon={iconMoney}
                    type="money"
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <FeatureItem 
                    icon={iconSecurity}
                    type="security"
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money
                        is always safe."
                />
            </section>
        </main>
    )
}

export default HomePage