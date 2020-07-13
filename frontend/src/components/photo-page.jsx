import React, { Component } from 'react';
import './photo-page.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
// import puppy1 from "./images/puppy1.jpg";
// import Logout from './logout'
import UserNameBox from './username-box';
import CommentBox from './comments-component';
import CommentForm from './comment-form';
import { getPhotoById } from '../store/reducers/puppyPhotos';
import { fetchPuppyPhoto } from '../store/utils/apiUtil';
import NavBar2 from './navbar2';
import Navbar2 from './navbar2';

class PhotoPage extends Component {
	componentDidMount() {
		this.props.fetchPuppyPhoto(this.props.match.params.id);
	}
	render() {
		const photoId = this.props.match.params.id;
		console.log('props', this.props);
		if (!this.props.photo) {
			return null;
		}
		return (
			<div className='grid-container-photo'>
				<Navbar2 />
				<main className='main'>
					<div className='content-photo'>
						<div className='photo-main photo-main2'>
							{/* <div className="link-return">
                <a href="/puppyfeed">Go back to feed page</a>
              </div> */}
							<img alt='puppy-pic' src={this.props.photo.photo.photoUrl}></img>
						</div>

						<div className='profile-main'>
							<UserNameBox userInfo={this.props.photo} />
						</div>

						<div className='comments-main'>
							<div>
								<p className='align-comments'>Comments</p>
								<ul className='comment-section-photo'>
									{this.props.photo.comments.map((comment) => (
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
				<footer className='footer-photo'>woofr © copyright 2020</footer>
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
