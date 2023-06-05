import React from "react";
import { DataMC } from "./api";

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
                <i className="fas fa-heart thin" />
                  <i className="fas fa-cart-plus "></i>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}