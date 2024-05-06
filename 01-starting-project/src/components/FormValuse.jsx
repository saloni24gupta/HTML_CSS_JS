import React, { useState } from 'react'

function FormValuse() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
    function handleClear() {
        Close()
    }
    function handleClick(e) {
        e.preventDefault()
        setSubmitted(false)
    }
    function handleEmailChange(e) {
        e.preventDefault()
        // setSubmitted(false)
        setEmail(e.target.value)
        console.log(email)
    }
    function handlePasswordChange(e) {
        e.preventDefault()
        // setSubmitted(false)
        setPassword(e.target.value)
        console.log(password)
    }
    return (
   
        <form action="">
            <h2>Login</h2>
            <div className="control-row">
                <div className="control-margin">
                    <label htmlFor='email'>Email</label>
                    <input type="email"
                        name="email"
                        onChange={handleEmailChange}
                        value={email}
                    />

                </div>
            </div>
            <div className="control-row">
                <div className="control-margin">
                    <label htmlFor="password"></label>
                    <input type="password"
                        name="password"
                        onChange={handlePasswordChange}
                        value={password} />
                </div>
            </div>
            <div className="data">
                <p>{'enter Email: ' +  email + 'enter Password' + password}</p>
            </div>
            <p className="form-actions">
                <button onClick={handleClear}>Reset</button>
                <button onClick={handleClick}>Login</button>
            </p>
        </form>
    )
}

export default FormValuse