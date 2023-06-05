import React from "react";

export default function SignupForm(){
    return(
        <div className="form-card">
             <h3 className="form-title">Tao là signup</h3>

             <div className="form-content">
                <div className="input-form">
                    <p>Usser</p>
                    <input className="form-control"></input>
                </div>
                <div className="input-form">
                    <p>Password</p>
                    <input className="form-control"></input>
                </div>
                <div className="input-form">
                    <p>Email</p>
                    <input className="form-control"></input>
                </div>
                <div className="input-form">
                    <p>Address</p>
                    <input className="form-control"></input>
                </div>
             </div>


        </div>
    )
}


   