import React from "react"
import { dataFooter } from "./apiFT"

export default function TopFooter() {
  return (
    <div className="Footer-top container">
      {dataFooter.map((item) => (
        <div className="element-Contract" key={item.id}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <i className={item.icon}></i>
          </a>
          <span>{item.name}  </span>
        </div>
      ))}
    </div>
  )
}