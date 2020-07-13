import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => (
  <header className="header nav-bar">
    <div>
      <span className="woofr-logo">
        <a href="/">woofr</a>
      </span>
    </div>
    <div className="header-links">
      <Link className="landing-page-navbar__header login-button" to="/login">
        <button className="login-button" type="submit">
          Login
        </button>
      </Link>
    </div>
  </header>
);
export default Navbar;
