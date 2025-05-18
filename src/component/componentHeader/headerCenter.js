import React from "react"
import { Link as Link } from "react-scroll"


export default function HeaderCenter() {
   return (
      <div className="Header-center">
         <ul className="list-center">
            <li><Link
               activeClass="active" to="top_new" spy={true}
               smooth={true}
               hashSpy={true}
               offset={-100}
               duration={600}
               delay={0}>
               Top New
            </Link></li>
            <li><Link
               activeClass="active" to="arrivals" spy={true}
               smooth={true}
               hashSpy={true}
               offset={0}
               duration={600}
               delay={-300}>
               New Arrivals
            </Link> </li>
            <li>Steam </li>

            <li><Link
               activeClass="active" to="exT" spy={true}
               smooth={true}
               hashSpy={true}
               offset={-100}
               duration={600}
               delay={0}>
               Devices
            </Link> </li>
            <li> <Link
               activeClass="active" to="mchoose" spy={true}
               smooth={true}
               hashSpy={true}
               offset={-200}
               duration={600}
               delay={0}>
               Most Choose
            </Link> </li>
         </ul>
      </div>
   )
}