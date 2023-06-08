import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Master from "./master";
import FormRoot from "./component/formOption";
import LoginForm from "./component/login";
import SignupForm from "./component/signup";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />} />
          <Route path="/" element={<FormRoot />}>
            <Route path="login" element={<LoginForm />}/>
            <Route path="signup" element={< SignupForm/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;