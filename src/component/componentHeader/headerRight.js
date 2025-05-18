import React, { useState, useRef, useEffect } from 'react'
import { Data } from './apiHeader'
import Cart from './componentCart'

export default function HeaderRight({ setToggle }) {
  const [open, setOpen] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [countDataCart, setCountDataCart] = useState(Data.length)

  const ref = useRef()
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const clickToFind = () => {
    setOpen(open === 'find' ? null : 'find')
  }
  const OpenProfile = () => {
    setOpen(open === 'profile' ? null : 'profile')
  }
  const OpenCart = () => {
    setOpen(open === 'cart' ? null : 'cart')
  }
  const openProfiledt = () => {
    setToggle()
    setOpen(null)
  }
  const resultToFind = (event) => {
    setInputValue(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className="Header-right" ref={ref}>
      <ul className="list-right">
        <li><i onClick={clickToFind}
          className="fa fa-thin fa-magnifying-glass">
        </i>
        </li>
        <li onClick={OpenProfile} ><i className="fa fa-thin  fa-circle-user"  ></i> My account </li>
        <li onClick={OpenCart} ><i className="fas fa-cart-shopping"></i> {countDataCart} </li>
      </ul>
      {open === 'find' && (<div className='form-input-search'><input type="text" onChange={resultToFind} /> </div>)}
      {open === 'profile' &&
        <ul className='list-Prf'>
          <li onClick={openProfiledt}>Your Profile</li>
          <li>Logout</li>
        </ul>
      }
      {open === 'cart' &&
        <Cart openCart={OpenCart} />
      }
    </div>
  )
}