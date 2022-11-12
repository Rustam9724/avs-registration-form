function Email({email, setEmail, isValidEmail}) {

    const changeHandler = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div className="form-field">
            <p className="field-name">Email adress</p>
            <input type="text" value={email} onChange={changeHandler} className={!isValidEmail ? "invalid-input" : ''}/>
            {!isValidEmail && <p className="invalid-message">Please enter a valid email address</p>}
        </div>
    )
}

export default Email;