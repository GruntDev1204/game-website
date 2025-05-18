import React, { useState } from "react"
import { hotNewData, formatCurrency } from "./api"
import { themVaoGio, addtoWish } from "../nofity"

export default function HotNew() {
  return (
    <>
      <div className="hot-new container">
        <div className="hot-body">
          <ul className="list-hot">
            {hotNewData.map((item) => (
              <li key={item.id}>
                <div className='product-card'>
                  <img src={item.image} alt="Product Image" />
                  <div className="details-card">
                    <h3 className="product-action">
                      <i className="fas fa-heart thin" onClick={addtoWish} />
                      <i className="fas fa-cart-plus " onClick={themVaoGio} ></i>
                    </h3>
                  </div>
                  <div className="text-cart">
                    <h3 className="product-title">{item.name}</h3>
                    {item.sale === 0 ? (
                      <p className="product-price">
                        <span className="price-sold">
                          {formatCurrency(item.sale)}
                        </span>
                      </p>
                    ) : (
                      <p className="product-price">
                        <span className="sale-type">
                          {formatCurrency(item.price)}
                        </span>
                        <span className="price-sold">
                          {formatCurrency(
                            item.price - (item.price * item.sale) / 100
                          )}
                        </span>
                      </p>
                    )}
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
