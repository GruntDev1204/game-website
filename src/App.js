import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Master from "./master";
import FormRoot from "./component/formComponent/formOption";
import LoginForm from "./component/formComponent/login";
import SignupForm from "./component/formComponent/signup";
import Profile from "./component/profile";

import 'react-toastify/dist/ReactToastify.css';


function App() {
   const  [profileDT, setPr] = useState(false);
  const setToggle = () =>{
    setPr(!profileDT);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master  setToggle={setToggle} />} />
          <Route path="/" element={<FormRoot />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={< SignupForm />} />
          </Route>
         
           
        </Routes>
      </BrowserRouter>
      {profileDT && <Profile  setToggle={setToggle} />}
    </>

  );
}

export default App;