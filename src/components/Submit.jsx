function Submit({name, setIsValidName, email, setIsValidEmail, isAgree, setShowAgrWarning, setIsRegister}) {
    const clickHandler = () => {
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        if (!name) {
            setIsValidName(false);
        } else {
            setIsValidName(true);
        }

        if (!emailReg.test(email)) {
            setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
        }

        if (!isAgree) {
            setShowAgrWarning(true)
        } else {
            setShowAgrWarning(false)
        }

        if (name && emailReg.test(email) && isAgree) {
            setIsRegister(true);
        }
    }

    return <button className="submit" onClick={clickHandler}>Get Free License</button>
}

export default Submit;