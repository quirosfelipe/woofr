import { puppiesAdded } from '../reducers/puppyPhotos';
import { puppyAdded } from '../reducers/puppyPhotos';
import { photoUploaded } from '../reducers/aws';

export const fetchPuppyPhotos = () => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/api/photos`);
	if (!response.ok) throw response;
	const { photos } = await response.json();
	dispatch(puppiesAdded(photos));
};

export const fetchPuppyPhoto = (id) => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/api/photos/photo/${id}`);
	if (!response.ok) throw response;
	console.log('This is the response', response);
	// const { photo, comments } = await response.json();
	const { photo } = await response.json();
	// console.log('this is the photo', photo, comments);
	// const photo_info = { photo, comments };
	// console.log("this is the object", photo_info);
	// let payload = { photo: photo, comments: comments };
	dispatch(puppyAdded(photo));
};

// export const fetchPhotoComments = (id) => async(dispatch) => {
//   const response = await fetch(`http://localhost:5000/api/photo/${id}`
//   if (!response.ok) throw response;

// }
export const postToAws = (formData) => async (dispatch) => {
	console.log('in the aws route');
	const response = await fetch('http://localhost:5000/api/upload', {
		method: 'POST',
		// headers: { 'Content-Type': 'multipart/form-data' },
		body: formData,
	});
	if (response.ok) {
		const { message } = response.json();
		return dispatch(photoUploaded(message));
	}
};
