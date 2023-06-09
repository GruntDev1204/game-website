import React, { useState  } from 'react';
import { Data } from './apiHeader';
import Cart from './componentCart';


export default function HeaderRight({setToggle}){
    const [Find, setFind] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [profile , setProfile] =  useState(false);

    const [cart , isCart] =  useState(false);


    const [countDataCart, setCountDataCart] = useState(Data.length);
    
    const OpenProfile = () =>{
      setProfile(!profile);
    }
    const OpenCart = () => {
      isCart(!cart);
    }
    const clickToFind = (e) => {
      setFind(!Find);
    } 

    const openProfiledt = () =>{
      setToggle();
      setProfile(!profile);
    }
    

   
    
    const resultToFind = (event) => {
        setInputValue(event.target.value); // Xử lý sự kiện input
        console.log(event.target.value); // Xử lý sự kiện input
    }

    return(
       <div className="Header-right" >
           <ul className="list-right">
            <li><i onClick={clickToFind}
              className="fa fa-thin fa-magnifying-glass">
              </i>
            </li>
            <li onClick={OpenProfile} ><i className="fa fa-thin  fa-circle-user"  ></i> My account </li> 
            <li  onClick={OpenCart} ><i className="fas fa-cart-shopping"></i> {countDataCart} </li>
           </ul>
           {Find &&(<div className='form-input-search'><input type="text" onChange={resultToFind} /> </div>)}
           {profile && 
              <ul className='list-Prf'>
                <li onClick={openProfiledt}>Your Profile</li>
                <li>Logout</li>
              </ul>
            }
            {cart && 
              <Cart openCart={OpenCart} />
            }
           
       </div>
       
    )
}