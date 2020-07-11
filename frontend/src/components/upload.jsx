import React, { Component } from 'react';

export default class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: '',
			photoName: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		this.props.postPhotos();
	}

	handlePhotoName = (e) => {
		this.setState({ photoName: e.target.value });
	};

	handleDescription = (e) => {
		this.setState({ description: e.target.value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div className='upload-form-container'>
				<form className='upload-form'>
					<p>Tell us something about this woofer!</p>
					<input
						type='text'
						value={this.state.photoName}
						onChange={this.handlePhotoName}
					></input>
					<input
						type='text'
						value={this.state.description}
						onChange={this.handleDescription}
					></input>
					<button
						className='upload-form__button'
						onSubmit={this.handleSubmit}
					></button>
				</form>
			</div>
		);
	}
}
