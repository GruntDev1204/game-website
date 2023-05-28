import React from "react";
import poster from "../assets/background.png";
import HotNew from "./componentContent/hotNew";
import Arr from "./componentContent/arrivals";
import Ext from "./componentContent/Extras";

export default function Content(){
   return(
    <>
        <div className="Content-area ">
            <div className="poster"> <img src={poster}></img></div>
            <section  id="top_new"> <HotNew/> </section>
            <section  id="arrivals"> <Arr/> </section>
            <section  id="exT"> <Ext/> </section>
        </div>
    </>
   )
}