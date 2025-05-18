import React, { useState, useRef, useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Master from "./master"
import FormRoot from "./component/formComponent/formOption"
import LoginForm from "./component/formComponent/login"
import SignupForm from "./component/formComponent/signup"
import Profile from "./component/profile"

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [profileDT, setPr] = useState(false)
  const setToggle = () => {
    setPr(!profileDT)
  }
  const profileRef = useRef()
  useEffect(() => {
    if (!profileDT) return;
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setPr(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [profileDT])
  return (
    <>
      {profileDT && <div ref={profileRef}><Profile setToggle={setToggle} /></div>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master setToggle={setToggle} />} />
          <Route path="/" element={<FormRoot />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={< SignupForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App