import React, { useState, useEffect, Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import './puppyFeed.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { fetchAllPhotos } from '../actions/photosActions';
import puppy1 from './images/puppy1.jpg';
import { getAllPhotos } from '../reducers/photoReducer';

import { fetchPuppyPhotos } from '../store/utils/apiUtil';
import { getPhotoById } from '../store/reducers/puppyPhotos';
import { getPhotos } from '../store/reducers/puppyPhotos';

// import data from "./data.js"
// import Logout from "./logout";

// const PuppyFeed = (props) => {
//   const photos = useSelector((state) => state.sneakerList);
//   console.log("this is sneakerDetails", sneakerList);
//   const { sneakers, loading, error } = sneakerList;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(listSneakers());
//   }, []);


class PuppyFeed extends Component {
	componentDidMount() {
		this.props.fetchPuppyPhotos();
	}

	render() {
		return (
			<div className='grid-container'>
				<header className='header'>
					<div className='woofr-logo'>
						<a href='/'>woofr</a>
					</div>
					<div className='search-bar'>
						<input></input>
						<a href='/upload'>Upload</a>
					</div>
					<div className='header-links'>
						<a href='/user'>User</a>
						{/* <Logout/> */}
					</div>
				</header>
				<main className='main'>
					<div className='main-content'>
						<ul className='photos'>
							{this.props.photos.map((photo) => (
								<li key={photo.id}>
									<Link to={`/photo-page/${photo.id}`}>
										<div className='photo'>
											<div className='photo-header'>
												<div className='photo-owner'>{photo.id}</div>
												<div className='photo-title'>{photo.photoName}</div>
											</div>
											<img className='photo-img' src={photo.photoUrl}></img>
											<div className='photo-description'>
												{photo.description}
											</div>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</main>
				<footer className='footer'>our footer</footer>
			</div>
		);
	}
}
// const msp = (state) => {
//   // let photo = ownProps.match.params.photos.id;
//   // const { photo } = state;
//   // return {
//   //   // photo: photo,
//   //   // photo: state.photos[photo],
//   //   photo,
//   // };
//   photos: getAllPhotos(state);
// };

// const mdp = (dispatch) => {
//   return {
//     fetchAllPhotos: () => dispatch(fetchAllPhotos()),
//   };
// };

const mapStateToProps = (state, id) => ({
	photo: getPhotoById(state, id),
	photos: getPhotos(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchPuppyPhotos: () => dispatch(fetchPuppyPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PuppyFeed);
