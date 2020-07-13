import React from "react";
import { Link } from "react-router-dom";
import cloud from "../static/cloud.png";
import Logout from "./logout";
import "./navbar2.css";

function handleLogout() {
  window.localStorage.removeItem("USER_EMAIL");
  window.localStorage.removeItem("USER_NAME");
  window.localStorage.removeItem("USER_ID");
  window.localStorage.removeItem("TOKEN_KEY");
}

const Navbar2 = () => (
  <header className="header">
    <div>
      <span className="woofr-logo">
        <a href="/">woofr</a>
      </span>
      <span className="puppyfeed">
        <a href="/puppyfeed">PuppyFeed</a>
      </span>
      <span className="puppyfeed pup">
        <a href="/profile-page">You</a>
      </span>
      <Link to="/upload">
        <span className="upload-icon">
          <img className="upload-icon" src={cloud} />
        </span>
      </Link>
    </div>

    {/* <div className="search-bar">
      <input></input>
    </div> */}
    {/* <a href="/upload">Upload</a> */}
    {/* <div className="header-links">
      <Link className="landing-page-navbar__header login-button" to="/">
        <button
          className="logout-button"
          onClick={handleLogout}
          type="submit"
        >
          Logout
        </button>
      </Link>
    </div> */}
    <Logout />
  </header>
);
export default Navbar2;
