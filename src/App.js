import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from "./component/login";
import SignupForm from "./component/signup";
import Master from "./master";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;