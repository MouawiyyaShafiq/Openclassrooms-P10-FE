function Account ({title,amount,amountDescription}) {

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-content-wrapper-title">{title}</h3>
                <p className="account-content-wrapper-amount">{amount}</p>
                <p className="account-content-wrapper-amount-description">{amountDescription}</p>
            </div>
            <div className="account-content-wrapper-cta">
                <button className="account-content-wrapper-transaction-button">View transactions</button>
            </div>
        </section>
    )

}

export default Account