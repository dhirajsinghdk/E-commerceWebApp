import React from "react";

import NavBar from "./components/navbar/index";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import Product from "./Pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
