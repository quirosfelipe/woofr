import React from "react";
import "./profile-page.css";
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import puppy1 from './images/puppy1.jpg'
// import Logout from './logout'
import UserNameBox from './username-box'
import CommentBox from './comments-component'
import Timeline from './timeline-component'


export default function ProfilePage() {
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
          <div className="content">
            <div className="photo-main">
                <div className="link-return">
                    <a href="/puppyfeed">Go back to feed page</a>
                </div>
                <div><Timeline /></div>
            </div>
            <div className="about-main">
               <div className="about-title">
                    <h2>About</h2>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates sint ex eaque perspiciatis, tempore ducimus sed. Cumque quos, modi possimus repellendus inventore omnis ipsam maxime eius doloremque, nisi sunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quasi iure suscipit repellat tempore aut rem vero provident beatae magnam. Doloribus et reiciendis dolores dolor sed. Consequatur hic quod qui.</h5>
                </div>

            </div>

            <div className="comments-main">
                <div><h3>Your Photos</h3>
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
                </ul></div>

            </div>
            <div className="contact-info">
                <div>
                    JOINED:  1994
                </div>
                <div>
                    EMAIL: john@doe.com
                </div>
            </div>

          </div>

        </main>
        <footer className="footer">
          our footer
        </footer>

      </div>
  )
}
