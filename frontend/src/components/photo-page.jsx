import React, { Component } from 'react';
import './photo-page.css';
import { connect } from 'react-redux';
// import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
// import puppy1 from "./images/puppy1.jpg";
// import Logout from './logout'
import UserNameBox from './username-box';
import CommentBox from './comments-component';
import { getPhotoById } from '../store/reducers/puppyPhotos';
import { fetchPuppyPhoto } from '../store/utils/apiUtil';

class PhotoPage extends Component {
	componentDidMount() {
		this.props.fetchPuppyPhoto(this.props.match.params.id);
	}
	render() {
		// console.log('props', this.props);
		if (!this.props.photo) {
			return null;
		}
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
					<div className='content-photo'>
						<div className='photo-main'>
							<div className='link-return'>
								<a href='/puppyfeed'>Go back to feed page</a>
							</div>
							<img alt='puppy-pic' src={this.props.photo.photoUrl}></img>
						</div>

						<div className='profile-main'>
							<UserNameBox />
						</div>

						<div className='comments-main'>
							<div>
								<p>Comments section</p>
								<CommentBox />
								<CommentBox />
								<CommentBox />
								<CommentBox />
							</div>
						</div>
					</div>
				</main>
				<footer className='footer'>our footer</footer>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const photo = getPhotoById(state, ownProps.match.params.id);
	return {
		photo,
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchPuppyPhoto: (id) => dispatch(fetchPuppyPhoto(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
