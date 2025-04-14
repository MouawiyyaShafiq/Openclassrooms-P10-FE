function UserPage () {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="header-edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-content-wrapper-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-content-wrapper-amount">$2,082.79</p>
                    <p className="account-content-wrapper-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <button className="account-content-wrapper-transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-content-wrapper-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-content-wrapper-amount">$10,928.42</p>
                    <p className="account-content-wrapper-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <button className="account-content-wrapper-transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-content-wrapper-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-content-wrapper-amount">$184.30</p>
                    <p className="account-content-wrapper-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <button className="account-content-wrapper-transaction-button">View transactions</button>
                </div>
            </section>
        </main>

    )
}

export default UserPage