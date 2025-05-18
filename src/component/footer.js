import React from "react"
import BottomFooter from "./componentFooter/botFt"
import TopFooter from "./componentFooter/topFt"


export default function Footer() {

    return (
        <div className="footer-area ">
            <TopFooter />
            <BottomFooter />
        </div>
    )
}