import React from "react";

export default function Profile({ setToggle}){

    return(
        <div className="profile-card">
             <div className="profile-dt container">
                <i className="fas fa-xmark" onClick={setToggle} ></i>
                <div className="header" >Toa là profile</div>
                <div className="content">Toa là profile</div>
                <div className="footer">Toa là profile</div>
             </div>
        </div>
    )

}