import { useState } from 'react';
import Name from './Name';
import Email from './Email';
import Agreement from './Agreement';
import Submit from './Submit';
import Logo from './Logo';

function Form({setIsRegister}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAgree, setAgree] = useState(false);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showAgrWarning, setShowAgrWarning] = useState(false);

    return (
        <div className="left-window">
            <Logo />
            <div className="form">
                <h1 className="form-title">Get started for free!</h1>
                <p className="form-description">Please, fill in the form and get a free license key for your PC</p>
                <Name name={name} setName={setName} isValidName={isValidName}/>
                <Email email={email} setEmail={setEmail} isValidEmail={isValidEmail}/>
                <br />
                <Agreement isAgree={isAgree} setAgree={setAgree} showAgrWarning={showAgrWarning}/>
                <br />
                <Submit 
                    name={name} setIsValidName={setIsValidName} 
                    email={email} setIsValidEmail={setIsValidEmail} 
                    isAgree={isAgree} setShowAgrWarning={setShowAgrWarning}
                    setIsRegister={setIsRegister}
                />
            </div>
        </div>
    )
}

export default Form;