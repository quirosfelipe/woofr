import React from "react";
import "./photo-page.css";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import puppy1 from "./images/puppy1.jpg";
// import Logout from './logout'
import UserNameBox from "./username-box";
import CommentBox from "./comments-component";

export default function PhotoPage() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="woofr-logo">
          <a href="/">woofr</a>
        </div>
        <div className="search-bar">
          <input></input>
          <a href="/upload">Upload</a>
        </div>
        {/* <div className="header-links">
              <a href="/user">User</a>
              {/* <Logout/> */}
          {/* </div> */}
        </header>
        <main className="main">
          <div className="content">
            <div className="photo-main">
              <div className="link-return">
                <a href="/puppyfeed">Go back to feed page</a>
              </div>
              <img alt="puppy-pic" src="http://farm66.staticflickr.com/65535/50085236156_7e3a56d093.jpg"></img>
            </div>
            <div className="profile-main">
                <UserNameBox />
            </div>
            <img
              alt="puppy-pic"
              src="http://farm66.staticflickr.com/65535/50085236156_7e3a56d093.jpg"
            ></img>
          </div>
          <div className="profile-main">
            <UserNameBox />
          </div>
          <div className="comments-main">
            <div>
              <h2>Comments section</h2>
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">our footer</footer>
    </div>
  );
}
