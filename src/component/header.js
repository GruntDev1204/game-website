import React from "react";
import HeaderLeft from "./componentHeader/headerLeft";
import HeaderRight from "./componentHeader/headerRight";
import HeaderCenter from "./componentHeader/headerCenter";


export default function Header(){
    return(
        <section id="head-of-page">
            <div className="header-area">
                <div className="container fit">
                     <HeaderLeft/>
                    <HeaderCenter/>
                    <HeaderRight/>
                </div> 
            </div>
        </section>
    
    )
}