import React, { useState } from 'react'
import { dataArrivals, formatCurrency } from './api'
import { themVaoGio, addtoWish } from "../nofity"

export default function Arr() {
    const [show, setShow] = useState(1)
    const clickToSetShow = () => {
        setShow((item) => {
            const limit = 3
            const value = item + 1
            return value <= limit ? value : 1
        })
        console.log('amount list game: ' + show)
    }


    const renderNumbers = () => {
        const numbers = []
        for (let i = 1; i <= 12 / 4; i++) {
            numbers.push(
                <p key={i} onClick={clickToSetShow}>
                    {i}
                </p>
            )
        }
        return numbers
    }

    return (
        <>
            <div className="ARR-area container">
                <div className="ARR-area-head">
                    <h3>New Arrivals</h3>
                    <div className="menu-skip">{renderNumbers()}</div>
                </div>
                <div className="ARR-area-body">
                    <ul className="list-ARR">
                        {dataArrivals[show - 1].map((item) => (
                            <li key={item.id}>
                                <div className="product-card">
                                    <img src={item.image} alt="Product Image" />
                                    <div className="details-card">
                                        <h3 className="product-action">
                                            <i className="fas fa-heart thin" onClick={addtoWish} />
                                            <i className="fas fa-cart-plus  " onClick={themVaoGio} />
                                        </h3>
                                    </div>

                                    <div className="text-cart">
                                        <h3 className="product-title">{item.name}</h3>
                                        <p className="product-price">
                                            <span className="price-no-sale "> {formatCurrency(item.price)}</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
