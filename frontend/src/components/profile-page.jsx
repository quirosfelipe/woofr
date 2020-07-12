import React, { Component } from "react";
import "./profile-page.css";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import puppy1 from "./images/puppy1.jpg";
// import Logout from './logout'
import Timeline from "./timeline-component";
import PhotoBox from "./photo-box";
import { fetchPuppyOwners } from "../store/utils/apiUtil";
import { getPhotos } from "../store/reducers/puppyPhotos";
import { connect } from "react-redux";
import NavBar2 from "./navbar2";
// import { fetchPuppyPhotos } from "../store/utils/apiUtil";
// export const USER_INFO = "USER_INFO";

// const access_token = window.localStorage.getItem(TOKEN_KEY);
const user_email = window.localStorage.getItem("USER_EMAIL");
const user_name = window.localStorage.getItem("USER_NAME");
const user_id = window.localStorage.getItem("USER_ID");
// const { user_name, email, id } = user;

console.log("this is the user", user_name, user_email, user_id);
//console.log("this is the user", user.id);
//console.log("this is the user", user.email);

class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchPuppyOwners(user_id);
  }
  render() {
    console.log("props", this.props.photos);
    if (!this.props.photos) {
      return null;
    }
    return (
      <div className="grid-container">
        <NavBar2 />
        <main className="main">
          <div className="content">
            <div className="photo-main">
              {/* <div className="link-return">
                <a href="/puppyfeed">Go back to feed page</a>
              </div> */}
              <div>
                <Timeline data={user_name} />
              </div>
            </div>
            <div className="about-main">
              <div className="about-title">
                <h2>Photographer's Bio</h2>
                <h5>
                  Elvis Aaron Presley (January 8, 1935 – August 16, 1977), also
                  known simply as Elvis, was an American singer and actor. He is
                  regarded as one of the most significant cultural icons of the
                  20th century and is often referred to as the "King of Rock and
                  Roll" or simply "the King". His energized interpretations of
                  songs and sexually provocative performance style, combined
                  with a singularly potent mix of influences across color lines
                  during a transformative era in race relations, led him to
                  great success—and initial controversy.
                </h5>
              </div>
            </div>

            <div className="comments-main">
              <div>
                <h3>Your Photos</h3>
                <ul className="photos">
                  {this.props.photos.map((photo) => (
                    <PhotoBox photo={photo} className="photo" />
                    // <li key={photo.id}>
                    //   <Link to={`/photo-page/${photo.id}`}></Link>
                    //   <div className="photo">
                    //     <div className="photo-header">
                    //       <div className="photo-owner">{photo.userId}</div>
                    //       <div className="photo-title">{photo.photoName}</div>
                    //     </div>
                    //     <img
                    //       alt="puppy 1"
                    //       className="photo-img"
                    //       src={photo.photoUrl}
                    //     ></img>
                    //     <div className="photo-description">description 1</div>
                    //   </div>
                    // </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="contact-info">
              <div>JOINED: 1994</div>
              <div>EMAIL: {user_email}</div>
            </div>
          </div>
        </main>
        <footer className="footer">our footer</footer>
      </div>
    );
  }
}

const mapStateToProps = (state, id) => ({
  photos: getPhotos(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPuppyOwners: (user_id) => dispatch(fetchPuppyOwners(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
