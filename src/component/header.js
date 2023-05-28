import React from "react";
import HeaderLeft from "./componentHeader/headerLeft";
import HeaderRight from "./componentHeader/headerRight";
import HeaderCenter from "./componentHeader/headerCenter";


export default function Header(){
    return(
        <div className="header-area container"> 
            <HeaderLeft/>
            <HeaderCenter/>
            <HeaderRight/>
        </div>
    )
}