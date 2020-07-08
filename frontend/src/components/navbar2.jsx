import React from "react";
import { Link } from "react-router-dom";
import Logout from "./logout";
import "./navbar2.css";
import Search from "./search";

const Navbar2 = () => (
  <div className="landing-page-navbar2 positioned">
    <div className="landing-page-navbar__header">
      <Link className="landing-page-navbar__header-logo" to="/">
        <h2 className="woofr">
          <strong>woofr</strong>
        </h2>
      </Link>
    </div>
    <div className="landing-page-navbar__header">
      <Search />
    </div>
    <Link className="landing-page-navbar__header login-button">
      <Logout />
    </Link>
  </div>
);
export default Navbar2;
