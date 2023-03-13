import { useState } from "react";

function SignUp() {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
    

    function validEmail(email) {
        let index_of_at = email.indexOf("@");
        let index_of_dot = email.indexOf(".");
        return (index_of_at > 1 && index_of_dot > index_of_at);
    }
    
    function validPassword(password) {
        return password.length >= 8;
    }
    
    function validConfirmPassword(password, confirmPassword) {
        return (password === confirmPassword);
    }

    function handleEmailChange(e) {
        let email_value = e.target.value;
        setEmail(email_value);
        setEmailValid(validEmail(email_value));
    }

    function handlePasswordChange(e) {
        let pass = e.target.value;
        setPassword(pass);
        setPasswordValid(validPassword(pass));
        
    }
    
    function handleConfirmPasswordChange(e) {
        let pass = e.target.value;
        setConfirmPassword(pass);
        setConfirmPasswordValid(validConfirmPassword(pass, password));
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if(emailValid && passwordValid && confirmPasswordValid) {
            alert("Form submitted successfully");
        } else {
            alert("Form can not be submitted");
        }

    }
    
    return(
        <div className="container">
           <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={handleEmailChange} value={email} className={emailValid ? "border-green" : "border-red"} />
                    {emailValid ? <></> : <p className="text-red">Invalid email format</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={handlePasswordChange} value={password} className={passwordValid ? "border-green" : "border-red"} />
                    {passwordValid ? <></> : <p className="text-red">Password must be atleast 8 characters</p>}

                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" onChange={handleConfirmPasswordChange} value={confirmPassword} className={confirmPasswordValid ? "border-green" : "border-red"} />
                    {confirmPasswordValid ? <></> : <p className="text-red">Password do not match</p>}

                </div>

                <button type="submit">Sign Up</button>

            </form> 
        </div>
    )
}

export default SignUp;