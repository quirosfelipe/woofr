import React from "react";
import "./puppyFeed.css";
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import puppy1 from './images/puppy1.jpg'
import Logout from './logout'

import Navbar from "./navbar";

export default function PuppyFeed() {
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
          <div className="header-links">
              <a href="/user">User</a>
              <Logout/>
          </div>
        </header>
        <main className="main">
          <div className="main-content">
            <ul className="photos">
              <li>
                <div className="photo">
                  <div className="photo-header">
                    <div className="photo-owner">Owner 1</div>
                    <div className="photo-title">title 1</div>
                  </div>
                  <img className="photo-img" src={puppy1}></img>
                  <div className="photo-description">description 1</div>
                </div>
              </li>
              <li>
                <div className="photo">
                  <div className="photo-header">
                    <div className="photo-owner">Owner 1</div>
                    <div className="photo-title">title 1</div>
                  </div>
                  <img className="photo-img" src={puppy1}></img>
                  <div className="photo-description">description 1</div>
                </div>
              </li>
              <li>
                <div className="photo">
                  <div className="photo-header">
                    <div className="photo-owner">Owner 1</div>
                    <div className="photo-title">title 1</div>
                  </div>
                  <img className="photo-img" src={puppy1}></img>
                  <div className="photo-description">description 1</div>
                </div>
              </li>
              <li>
                <div className="photo">
                  <div className="photo-header">
                    <div className="photo-owner">Owner 1</div>
                    <div className="photo-title">title 1</div>
                  </div>
                  <img className="photo-img" src={puppy1}></img>
                  <div className="photo-description">description 1</div>
                </div>
              </li>
              <li>
                <div className="photo">
                  <div className="photo-header">
                    <div className="photo-owner">Owner 1</div>
                    <div className="photo-title">title 1</div>
                  </div>
                  <img className="photo-img" src={puppy1}></img>
                  <div className="photo-description">description 1</div>
                </div>
              </li>
              <li>
                <div className="photo">
                  <div className="photo-header">
                    <div className="photo-owner">Owner 1</div>
                    <div className="photo-title">title 1</div>
                  </div>
                  <img className="photo-img" src={puppy1}></img>
                  <div className="photo-description">description 1</div>
                </div>
              </li>
            </ul>
          </div>
        </main>
        <footer className="footer">
          our footer
        </footer>

      </div>
  )
}
// import Navbar2 from "./navbar2";

// export default function PuppyFeed() {
//   return (
//     <div classname="grid-container">
//       <Navbar2 className="nav-class" />
//     </div>
//   );
// }
