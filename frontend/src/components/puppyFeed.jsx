import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "./puppyFeed.css";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { fetchAllPhotos } from "../actions/photosActions";
import puppy1 from "./images/puppy1.jpg";
import { getAllPhotos } from "../reducers/photoReducer";
// import data from "./data.js"
// import Logout from "./logout";

const PuppyFeed = (props) => {
  const photos = useSelector((state) => state.sneakerList);
  console.log("this is sneakerDetails", sneakerList);
  const { sneakers, loading, error } = sneakerList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSneakers());
  }, []);

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
            {props.photos.map((puppy) => (
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
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">our footer</footer>
    </div>
  );
};

const msp = (state) => {
  // let photo = ownProps.match.params.photos.id;
  // const { photo } = state;
  // return {
  //   // photo: photo,
  //   // photo: state.photos[photo],
  //   photo,
  // };
  photos: getAllPhotos(state);
};

const mdp = (dispatch) => {
  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  };
};

export default connect(msp, mdp)(PuppyFeed);
