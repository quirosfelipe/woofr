import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import Search from './search';

const Navbar = () => (
	<div className='landing-page-navbar positioned'>
		<div className='landing-page-navbar__header'>
			<Link className='landing-page-navbar__header-logo' to='/'>
				<h2 className='woofr'>
					<strong>woofr</strong>
				</h2>
			</Link>
		</div>
		<div className='landing-page-navbar__header'>
			<Search />
		</div>
		<Link className='landing-page-navbar__header login-button' to='/login'>
			<button className='login-button' type='submit'>
				Login
			</button>
		</Link>
	</div>
);
export default Navbar;
