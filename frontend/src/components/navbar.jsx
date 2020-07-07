import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import "./navbar.css";
import Search from "./search";
const Navbar = () => (
  <div className="landing-page-navbar positioned">
    <div className="landing-page-navbar__header">
      <Link className="landing-page-navbar__header-logo" to="/">
        <h1>Woofr</h1>
      </Link>
    </div>
    <Search />
    {/* <div className="landing-page-navbar__header">
      <input alt="Search"></input>
    </div> */}
    <Link className="landing-page-navbar__header">
      <Login />
    </Link>
  </div>
);
export default Navbar;
