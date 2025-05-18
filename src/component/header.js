import React from "react"
import HeaderLeft from "./componentHeader/headerLeft"
import HeaderRight from "./componentHeader/headerRight"
import HeaderCenter from "./componentHeader/headerCenter"


export default function Header({ setToggle }) {
    return (
        <section id="head-of-page">
            <div className="header-area">
                <div className="container fit">
                    <HeaderLeft />
                    <HeaderCenter />
                    <HeaderRight setToggle={setToggle} />
                </div>
            </div>
        </section>

    )
}