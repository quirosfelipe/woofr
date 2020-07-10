import React from 'react';
import './profile-page.css';
// import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
// import puppy1 from './images/puppy1.jpg'
// // import Logout from './logout'
// import Timeline from './timeline-component'

export default function PhotoBox(data) {
	data = {
		name: 'me',
		age: 12,
		description: 'We love puppies!',
		image: 'http://farm66.staticflickr.com/65535/50086454436_1a18d65619.jpg',
	};
	return (
		<li>
			<div className='photo'>
				<div className='photo-header'>
					<div className='photo-owner'>{data.name}</div>
					<div className='photo-title'>{data.age}</div>
				</div>
				<img alt={data.name} className='photo-img' src={data.image}></img>
				<div className='photo-description'>{data.description}</div>
			</div>
		</li>
	);
}
