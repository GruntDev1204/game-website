import React from "react";

export default function LoginForm(){
    return(
        <div className="form-card">
             <h3 className="form-title">Tao là lOGIN</h3>

             <div className="form-content">
                <div className="input-form">
                    <p>Usser</p>
                    <input className="form-control"></input>
                </div>
                <div className="input-form">
                    <p>Password</p>
                    <input className="form-control"></input>
                </div>
             </div>


        </div>
    )
}