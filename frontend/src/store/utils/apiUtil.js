import { puppiesAdded } from "../reducers/puppyPhotos";
import { puppyAdded } from "../reducers/puppyPhotos";
import { myPuppy } from "../reducers/puppyPhotos";

export const fetchPuppyPhotos = () => async (dispatch) => {
  const response = await fetch(`http://localhost:5000/api/photos`);
  if (!response.ok) throw response;
  const { photos } = await response.json();
  dispatch(puppiesAdded(photos));
};

export const fetchPuppyPhoto = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:5000/api/photos/photo/${id}`);
  if (!response.ok) throw response;
  console.log("This is the response", response);
  const { photo, comments } = await response.json();
  console.log("this is the photo", photo, comments);
  // const photo_info = { photo, comments };
  // console.log("this is the object", photo_info);
  let payload = { photo: photo, comments: comments };
  dispatch(puppyAdded(payload));
};

export const fetchPuppyOwners = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:5000/api/photos/${id}`);
  if (!response.ok) throw response;
  const { photos } = await response.json();
  dispatch(myPuppy(photos));
};
