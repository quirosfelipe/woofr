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
    <div className="landing-page-navbar__search">
      <input alt="Search"></input>
    </div>
    <Link className="landing-page-navbar__login">
      <Login />
    </Link>
  </div>
);
export default Navbar;
