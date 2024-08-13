import React from "react";
import About from "../components/About";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import { Routes, Route } from "react-router-dom";
import UserDetail from "../components/UserDetail";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/About/:name" element={<UserDetail />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default Routing;
