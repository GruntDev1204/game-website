import React from "react"

export default function LoginForm() {
    return (
        <>
            <div className="form-content  Ma-lg">
                <div className="input-form">
                    <p>Email</p>
                    <input type="email" className="form-control"></input>
                </div>
                <div className="input-form">
                    <p>Password</p>
                    <input type="password" className="form-control"></input>
                </div>
                <label className="form-check">
                    <input
                        className="form-control"
                        type="checkbox" /> Remember me
                </label>
                <div className="action "><button className="btn-submit">LOGIN</button></div>
            </div>
            <div className="action-user ">
                <span className="border"> Reset password  </span>
            </div>
        </>
    )
}