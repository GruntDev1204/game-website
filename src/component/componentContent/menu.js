import React from "react"

export default function Menu({ clickMenu }) {
    return (
        <div className="tmp">
            <ul class="menu-list">
                <li>Menu item 1</li>
                <li>Menu item 2</li>
                <li>Menu item 3</li>
                <li onClick={clickMenu}>Cloes</li>
            </ul>
        </div>
    )
}