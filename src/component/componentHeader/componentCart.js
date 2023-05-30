import React, { useState } from 'react';


export default function Cart({ openCart }) {

    const clickClose = () => {
        openCart()
    }

    return (

        <div className='Cart'>
            <h3 className='Title-Cart'>Your Cart</h3>
            <ul className='Cart-list'>
                <li>
                    <img src="https://i.pinimg.com/564x/d4/e7/fb/d4e7fbe4aeca384d1d2761d8c1099bed.jpg" />
                    <div className="line-cart">
                        <p> Product : CSGO</p>
                        <p>$90.00</p>
                        <p>SL : 10 </p>
                    </div>
                </li>

                <li>
                    <img src="https://i.pinimg.com/564x/d4/e7/fb/d4e7fbe4aeca384d1d2761d8c1099bed.jpg" />
                    <div className="line-cart">
                        <p> Product : CSGO</p>
                        <p>$90.00</p>
                        <p>SL : 10 </p>
                    </div>
                </li>


                <li>
                    <img src="https://i.pinimg.com/564x/d4/e7/fb/d4e7fbe4aeca384d1d2761d8c1099bed.jpg" />
                    <div className="line-cart">
                        <p> Product : CSGO</p>
                        <p>$90.00</p>
                        <p>SL : 10 </p>
                    </div>
                </li>


                <li>
                    <img src="https://i.pinimg.com/564x/d4/e7/fb/d4e7fbe4aeca384d1d2761d8c1099bed.jpg" />
                    <div className="line-cart">
                        <p> Product : CSGO</p>
                        <p>$90.00</p>
                        <p>SL : 10 </p>
                    </div>
                </li>

            </ul>
            <button className='btn-sumbit'>Check</button>
            <button className='btn-sumbit close' onClick={clickClose}>Close</button>
        </div>
    )


}