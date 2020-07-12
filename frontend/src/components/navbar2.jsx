import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => (
  <header className="header">
    <div>
      <span className="woofr-logo">
        <a href="/">woofr</a>
      </span>
      <span className="puppyfeed">
        <a href="/puppyfeed">PuppyFeed</a>
      </span>
      <span className="puppyfeed">
        <a href="/profile-page">You</a>
      </span>
    </div>

    {/* <div className="search-bar">
      <input></input>
    </div> */}
    {/* <a href="/upload">Upload</a> */}
    <div className="header-links">
      <Link className="landing-page-navbar__header login-button" to="/">
        <button className="logout-button" type="submit">
          Logout
        </button>
      </Link>
    </div>
  </header>
);
export default Navbar2;
