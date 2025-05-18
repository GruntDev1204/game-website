import React from "react"
import { ExtData, formatCurrency } from "./api"

export default function Ext() {
    return (
        <div className="EXT-area">
            <h3 className="EXT-title container">Gaming devices</h3>
            <div className="EXT-content container">
                {ExtData[0].map((key) => (
                    <div className="Content-left" key={key.id}>
                        <span className="price-EXT">{formatCurrency(key.price)}</span>
                        <img src={key.img}></img>
                    </div>
                ))}
                <div className="Content-right">
                    {ExtData[1].map((key) => (
                        <div className="list-EXT" key={key.id}>
                            <span className="price-EXT">{formatCurrency(key.price)}</span>
                            <img src={key.img}></img>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}