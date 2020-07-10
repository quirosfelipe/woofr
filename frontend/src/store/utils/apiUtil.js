import { puppiesAdded } from '../reducers/puppyPhotos';
import { baseUrl } from '../../config';

export const fetchPuppyPhotos = () => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/api/photos`);
	if (!response.ok) throw response;
	const { photos } = await response.json();
	dispatch(puppiesAdded(photos));
};
