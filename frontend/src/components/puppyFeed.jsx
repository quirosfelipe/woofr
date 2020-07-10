import React from "react";
import "./puppyFeed.css";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import puppy1 from "./images/puppy1.jpg";
import data from './data.js'
// import Logout from "./logout";

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
              {/* <Logout/> */}
          </div>
      </header>
      <main className="main">
        <div className="main-content">
          <ul className="photos">
            {data.puppies.map(puppy =>
              <li key={puppy.id}>
                <Link to={`/photo-page/${puppy.id}`}>
                  <div className="photo">
                    <div className="photo-header">
                      <div className="photo-owner">{puppy.username}</div>
                      <div className="photo-title">{puppy.title}</div>
                    </div>
                    <img className="photo-img" src={puppy.img}></img>
                    <div className="photo-description">{puppy.description}</div>
                  </div>
                </Link>
             </li>

            )}
          </ul>
        </div>
      </main>
      <footer className="footer">our footer</footer>
    </div>
  );
}
// import Navbar2 from "./navbar2";

// export default function PuppyFeed() {
//   return (
//     <div classname="grid-container">
//       <Navbar2 className="nav-class" />
//     </div>
//   );
// }
