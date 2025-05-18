import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function FormRoot() {
    return (
        <div className="Form-user">
            <div className="form-card">
                <div className="list-form">
                    <Link className="form-title" to="login"><h3 >LOGIN</h3></Link>
                    <Link className="form-title" to="signup"> <h3 >REGISTER</h3></Link>
                </div>
                <Outlet />
            </div>
            <div className="poster-form">
                <div className="click-to-home">
                    <Link to="/
                " ><i className="fas fa-home "></i> </Link>
                </div>
                <img src="https://i.pinimg.com/564x/fc/e8/0a/fce80a4a263e9bfb8b2fad2cbecf91d7.jpg"></img>
            </div>
        </div>

    )
}