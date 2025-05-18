import React from "react"
import { DataMC } from "./api"
import { themVaoGio, addtoWish } from "../nofity"


export default function MostChoose() {

  return (
    <div className="mc-area ">
      <div className="container">
        <h3> Most Choose </h3>
        <ul className="list-mc">
          {DataMC.map((key) => (
            <li key={key.id}>
              <img src={key.img} />
              <div className="action-mc">
                <i className="fas fa-heart thin" onClick={addtoWish} />
                <i className="fas fa-cart-plus " onClick={themVaoGio}></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}