import React, { useState } from 'react'
import { Data } from './apiHeader'

export default function Cart({ openCart }) {
    const clickClose = () => {
        openCart()
    }
    const [dataCart, setdataCart] = useState(Data.map((data) => ({ ...data, quantity: 0 })))

    const increaseQuantity = (id) => {
        setdataCart((data) =>
            data.map((key) => (key.id === id ? { ...key, quantity: key.quantity + 1 } : key))
        )
    }
    const decreaseQuantity = (id) => {
        setdataCart((data) =>
            data.map((key) =>
                key.id === id ? { ...key, quantity: key.quantity > 0 ? key.quantity - 1 : 0 } : key
            )
        )
    }
    //format tiền
    const closeItem = (id) => {
        setdataCart((data) =>
            data.map((key) =>
                key.id !== id ? key : false
            ).filter(Boolean)
        )
    }
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (dataCart.length === 0) {
        return (
            <></>
        )
    } else {
        return (
            <div className='Cart'>
                <h3 className='Title-Cart'>Your Cart</h3>
                <ul className='Cart-list'>
                    {dataCart.map((item) => (
                        <li key={item.id}>
                            <div className="button-quantity">
                                <i className="fas fa-plus" onClick={() => increaseQuantity(item.id)}></i>
                                <span className="quantity">{item.quantity}</span>
                                <i className="fas fa-minus" onClick={() => decreaseQuantity(item.id)}></i>
                            </div>
                            <img src={item.image} alt={item.name} />
                            <div className="line-cart">
                                <p>{item.name}</p>
                                <p>Total: {formatCurrency(item.quantity * item.price)}</p>
                                <p>Price: {formatCurrency(item.price)}</p>

                            </div>
                            <i className="fas fa-xmark close-cart" onClick={() => closeItem(item.id)}></i>
                        </li>
                    ))}
                </ul>
                <button className='btn-sumbit'>Check</button>
                <button className='btn-sumbit close' onClick={clickClose}>Close</button>
            </div>
        )
    }



}