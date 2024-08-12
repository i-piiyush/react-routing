import React from "react";
import About from "../components/About";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import { Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default Routing;
