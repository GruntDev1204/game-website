import React from "react"
import Header from "./component/header"
import Content from "./component/content"
import Footer from "./component/footer"

export default function Master({ setToggle }) {
    return (
        <>
            <Header setToggle={setToggle} />
            <Content />
            <Footer />
        </>
    )
}