import React, { Component } from 'react';
import { connect } from 'react-redux';
import { successMessage } from '../store/reducers/aws';
import { postToAws } from '../store/utils/apiUtil';

class Upload extends Component {
	state = {
		description: '',
		photoName: '',
		photoFile: null,

		// this.handleUpload = this.handleUpload.bind(this);
	};

	handlePhotoName = (e) => {
		this.setState({ photoName: e.target.value });
	};

	handleDescription = (e) => {
		this.setState({ description: e.target.value });
	};

	handleFileChange = (e) => {
		this.setState({ photoFile: e.target.files[0] });
	};

	handleUpload = (e) => {
		e.preventDefault();
		const formData = new FormData();
		console.log('state info', this.state.photoFile);
		formData.append('file', this.state.photoFile);
		formData.append('id', this.props.match.params.id);
		this.props.postToAws(formData); //userId
	};

	render() {
		return (
			<div className='upload-form-container'>
				<form className='upload-form'>
					<p>Enter photo name!</p>
					<input
						type='text'
						value={this.state.photoName}
						onChange={this.handlePhotoName}
					></input>
					<p>Tell us something about your woofer!</p>
					<input
						type='textarea'
						value={this.state.description}
						onChange={this.handleDescription}
					></input>
					<p>Select a photo to upload!</p>
					<input
						onChange={this.handleFileChange}
						type='file'
						name='file'
					></input>
					<button className='upload-form__button' onClick={this.handleUpload}>
						Upload
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const message = successMessage(state);
	return {
		message,
	};
};

const mapDispatchToProps = (dispatch) => ({
	postToAws: (file, id) => dispatch(postToAws(file, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
