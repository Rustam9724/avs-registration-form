function Name({name, setName, isValidName}) {
    const changeHandler = (event) => {
        setName(event.target.value);
    }

    return (
    <div className="form-field">
            <p className="field-name">Name</p>
            <input type="text" value={name} onChange={changeHandler} className={!isValidName ? "invalid-input" : ""}/>
        {!isValidName && <p className="invalid-message">Please enter your name</p>}
    </div>
    )
}

export default Name;