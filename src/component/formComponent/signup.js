import React from "react"

export default function SignupForm() {
    return (
        <div className="form-content ">
            <div className="input-form">
                <p>Email</p>
                <input type="email" className="form-control"></input>
            </div>
            <div className="input-form">
                <p>Password</p>
                <input type="password" className="form-control"></input>
            </div>
            <div className="input-form">
                <p>Retype Password</p>
                <input type="password" className="form-control"></input>
            </div>
            <div className="input-form">
                <p>Address</p>
                <input type="text" className="form-control"></input>
            </div>
            <label className="form-check">
                <input
                    className="form-control"
                    type="checkbox" /> I am 13 or older and agree to the terms of the Agreement .
            </label>
            <div className="action"><button className="btn-submit">REGISTER</button></div>
            <div className="action-user">
                <span>Haven't an account yet? Create an account</span>
            </div>
        </div>
    )
}


