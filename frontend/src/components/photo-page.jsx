import React from 'react';
import './photo-page.css';
// import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
// import puppy1 from "./images/puppy1.jpg";
// import Logout from './logout'
import UserNameBox from './username-box';
import CommentBox from './comments-component';
import data from './data.js';

export default function PhotoPage(props) {
	console.log(props.match.params.id);
	const puppy = data.puppies[props.match.params.id - 1];
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
						<img alt='puppy-pic' src={puppy.img}></img>
					</div>

					<div className='profile-main'>
						<UserNameBox />
					</div>

					<div className='comments-main'>
						<div>
							<h2>Comments section</h2>
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
