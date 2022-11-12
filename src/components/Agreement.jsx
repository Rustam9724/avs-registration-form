function Agreement({isAgree, setAgree, showAgrWarning}) {

    const changeHandler = (event) => {
        setAgree(event.target.checked);
    } 

    return (
        <div className="agreement">
            <input type="checkbox" checked={isAgree} onChange={changeHandler} id="agreement-checkbox"/>
                <span className="agreement-description">By providing my personal data I agree to be informed about AVS4YOU software deals via email.</span>
            {
                showAgrWarning && <p className="invalid-message">Please agree to receive your free license key.</p>
            }
        </div>
    )
}

export default Agreement;