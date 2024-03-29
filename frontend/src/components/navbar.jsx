import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./navbar.css";

const Navbar = () => {
  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  return (
    <header className="header nav-bar">
      <div>
        <span className="woofr-logo">
          <p href="/puppyfeed">Woofr</p>
        </span>
      </div>
      {user ? (
        <span className="woofr-logo">
          <a href="/puppyfeed">Feed</a>
        </span>
      ) : (
        <div className="header-links">
          <Link className="landing-page-navbar__header" to="/signup">
            <button className="signup-button" type="submit">
              Sign-Up
            </button>
          </Link>
          <Link
            className="landing-page-navbar__header login-button"
            to="/login"
          >
            <button className="login-button" type="submit">
              Login
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};
export default Navbar;
