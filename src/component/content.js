import React, { useState ,useEffect  } from "react";
import poster from "../assets/background.png";
import HotNew from "./componentContent/hotNew";
import Arr from "./componentContent/arrivals";
import Ext from "./componentContent/Extras";
import MostChoose from "./componentContent/mostChoose";
import { Link as Link } from "react-scroll";

export default function Content(){
    //ẩn ảnh poster
    const [img,hideimg] = useState(true);

    const clickHideimg = () =>{
        if(img){
            hideimg(false);
        }else{
            hideimg(true);
        }
       
    }
    //ẩn nút up lên đầu trang
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          const position = window.pageYOffset;
          setScrollPosition(position);
          console.log(position)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    //mở menu 
    const [menu,OpenMenu] = useState(false);
    const clickMenu = () =>{
        OpenMenu(!menu);
    }
     



   return(
    <>
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
          <i className="fa-solid fa-bars menu" onClick={clickMenu}></i>
          {menu && <h3 className="Menu">Tao là menu</h3>}
            {img &&   <div className="poster"> <i className="fas fa-xmark" onClick={clickHideimg}></i> <img src={poster}></img> </div>}
            <section  id="top_new"> <HotNew/> </section>
            <section  id="arrivals"> <Arr/> </section>
            <section  id="exT"> <Ext/> </section>
            <section  id="mchoose"> <MostChoose/> </section>

        </div>
    </>
   )
}