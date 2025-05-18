import React, { useState, useEffect } from "react"
import { Link as Roue } from "react-router-dom"
import poster from "../assets/background.png"
import HotNew from "./componentContent/hotNew"
import Arr from "./componentContent/arrivals"
import MostChoose from "./componentContent/mostChoose"
import Menu from "./componentContent/menu"
import { Link as Link } from "react-scroll"
import { ToastContainer } from 'react-toastify'
import Ext from "./componentContent/extras"

export default function Content() {
  const [img, hideimg] = useState(true)

  const clickHideimg = () => {
    if (img) {
      hideimg(false)
    } else {
      hideimg(true)
    }

  }

  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <ToastContainer />
      <div className="Content-area ">

        {scrollPosition !== 0 && (
          <Link
            activeClass="active"
            to="head-of-page"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={600}
            delay={0}
          >
            <i className="fa-solid fa-arrow-up upto"></i>
          </Link>
        )}
        {/* <div className="menu-container"> */}
        <Roue to="login"><i className="fa-solid fa-user menu" ></i></Roue>
        {/* {menu && <Menu clickMenu={clickMenu}/>} */}
        {/* </div> */}
        {img && <div className="poster"> <i className="fas fa-xmark" onClick={clickHideimg}></i> <img src={poster}></img> </div>}
        <section id="top_new"> <HotNew /> </section>
        <section id="arrivals"> <Arr /> </section>
        <section id="exT"> <Ext /> </section>
        <section id="mchoose"> <MostChoose /> </section>
      </div>
    </>
  )
}