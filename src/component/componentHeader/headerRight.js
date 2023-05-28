import React, { useState } from 'react';


export default function HeaderRight(){
    const [Find, setFind] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const clickToFind = (e) => {
            setFind(true);
    } 

    const ClickClose = () => {
        setFind(false);
        setInputValue('');
     }

    const resultToFind = (event) => {
        setInputValue(event.target.value); // Xử lý sự kiện input
        console.log(event.target.value); // Xử lý sự kiện input

    }


    return(
       <div className="Header-right">
           <ul className="list-right">
            <li><i onClick={clickToFind}
              className="fa fa-thin fa-magnifying-glass">
              </i>
              {Find &&(<div className='form-input-search'><input type="text" onChange={resultToFind} /> <i className="fas fa-times" onClick={ClickClose}></i></div>)}
            </li>
            <li><i className="fa fa-thin  fa-circle-user"></i> My account</li>
            <li><i className="fas fa-cart-shopping"></i> 10 </li>
           </ul>
       </div>
    )
}