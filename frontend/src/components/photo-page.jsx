import React, { Component, useEffect } from "react";
import "./photo-page.css";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
// import puppy1 from "./images/puppy1.jpg";
// import Logout from './logout'
import UserNameBox from "./username-box";
import CommentBox from "./comments-component";
import CommentForm from "./comment-form";
import { getPhotoById } from "../store/reducers/puppyPhotos";
import { fetchPuppyPhoto } from "../store/utils/apiUtil";
import NavBar2 from "./navbar2";
import Navbar2 from "./navbar2";

const PhotoPage = (props) => {
  const photoId = props.match.params.id;

  useEffect(() => {
    props.fetchPuppyPhoto(photoId);
  }, []);

  // ("this is photoprops", props);
  // ("before", props.photo);
  if (!props.photo) {
    return null;
  }
  if (!props.photo.comments) return null;
  // ("after", props.photo);
  return (
    <div className="grid-container-photo">
      <Navbar2 />
      <main className="main">
        <div className="content-photo">
          <div className="photo-main photo-main2">
            {/* <div className="link-return">
                <a href="/puppyfeed">Go back to feed page</a>
              </div> */}
            <img alt="puppy-pic" src={props.photo.photoUrl}></img>
          </div>

          <div className="profile-main">
            <UserNameBox userInfo={props.photo} />
          </div>

          <div className="comments-main">
            <div>
              <p className="align-comments">Comments</p>
              <ul className="comment-section-photo">
                {props.photo.comments.map((comment) => (
                  <li key={comment.id}>
                    <CommentBox comment={comment} />
                  </li>
                ))}
              </ul>
              <div>
                <CommentForm props={photoId} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-photo">woofr © copyright 2020</footer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const photo = getPhotoById(state, ownProps.match.params.id);
  // ("photo from redux store", photo);
  return {
    photo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPuppyPhoto: (id) => dispatch(fetchPuppyPhoto(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
