import React from "react";
import "./profile-page.css";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
// import puppy1 from './images/puppy1.jpg'
// // import Logout from './logout'
// import Timeline from './timeline-component'

export default function PhotoBox(props) {
  // console.log("this are the photos props", props);

  return (
    <li key={props.photo.id}>
      <a href={`/photo-page/${props.photo.id}`}>
        <div className="photo">
          {/* <div className="photo-header">
            <div className="photo-owner">{props.photo.userId}</div>
            <div className='photo-title'>{data.age}</div>
          </div> */}
          <img
            alt={props.photo.description}
            className="photo-img"
            src={props.photo.photoUrl}
          ></img>
          {/* <div className="photo-description">{props.photo.description}</div> */}
        </div>
      </a>
    </li>
  );
}
