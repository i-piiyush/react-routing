import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" text-black flex justify-center gap-10 items-center p-4">
      <NavLink
        className={(e) => {
          return [
            e.isActive ? " text-red-600" : "",
            e.isActive ? "font-bold" : ""
        ].join(" ");
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-600" : "",
            e.isActive ? "font-bold" : ""
        ].join(" ");
        }}
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-600" : "",
            e.isActive ? "font-bold" : ""
        ].join(" ");
        }}
        to="/SignUp"
      >
        Sign Up
      </NavLink>
    </nav>
  );
}
export default Navbar;
