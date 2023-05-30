import React from "react";

export default function TopFooter(){
    return(
        <div className="Footer-top  container">
            <div className="element-Contract">
                <i className="fa-brands fa-github"></i> 
                <span>Github</span>
            </div>
            <div className="element-Contract">
                <i className="fa-brands fa-facebook"></i> 
                <span>Facebook</span>
            </div>
            <div className="element-Contract">
                <i className="fa-brands fa-gitlab"></i> 
                <span>Gitlab</span>
            </div>
            <div className="element-Contract">
                <i className="fa-brands fa-google"></i> 
                <span>Gmail</span>
            </div>
        </div>
    )
}