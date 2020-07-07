import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import "./navbar.css";

const Navbar = () => (
  <div className="landing-page-navbar">
    <div className="landing-page-navbar__header">
      <Link className="landing-page-navbar__header-logo" to="/">
        <h1>Woofr</h1>
      </Link>
    </div>
    <div className="options">
      <input alt="Search"></input>
    </div>
    <Link className="option">
      <Login />
    </Link>
  </div>
);
export default Navbar;
