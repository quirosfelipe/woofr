import React, { Component } from "react";
import { connect } from "react-redux";
import "./puppyFeed.css";
import { Link } from "react-router-dom";
import { fetchPuppyPhotos } from "../store/utils/apiUtil"; //api to call get all puppy photos
import { getPhotos } from "../store/reducers/puppyPhotos"; // selector to get photos from redux stor
import NavBar2 from "./navbar2";
import Navbar2 from "./navbar2";

class PuppyFeed extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPuppyPhotos();
  }

  render() {
    return (
      <div className="grid-container">
        <Navbar2 />
        <main className="puppy-main">
          <div className="main-content">
            <ul className="photos">
              {this.props.photos.map((photo) => (
                <li key={photo.id}>
                  <Link to={`/photo-page/${photo.id}`}>
                    <div className="photo">
                      {/* <div className="photo-header">
                        <div className="photo-owner">{photo.userId}</div>
                        <div className="photo-title">{photo.photoName}</div>
                      </div> */}
                      <img
                        className="photo-img"
                        alt={photo.photoName}
                        src={photo.photoUrl}
                      ></img>
                      {/* <div className="photo-description">
                        {photo.description}
                      </div> */}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">woofr © copyright 2020</footer>
      </div>
    );
  }
}

const mapStateToProps = (state, id) => ({
  photos: getPhotos(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPuppyPhotos: () => dispatch(fetchPuppyPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PuppyFeed);
