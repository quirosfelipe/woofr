import { puppiesAdded } from "../reducers/puppyPhotos";
import { puppyAdded } from "../reducers/puppyPhotos";
import { photoUploaded } from "../reducers/aws";
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
  photo.comments = comments;
  let payload = { ...photo };
  dispatch(puppyAdded(payload));
};

export const postToAws = (formData, userId, description, photoName) => async (
  dispatch
) => {
  console.log("in the aws route", description, photoName);
  let response = await fetch(`http://localhost:5000/api/${userId}/upload`, {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    const { photoUrl } = await response.json();
    console.log("photourl -> ", photoUrl);
    const message = "upload success";
    await fetch(`http://localhost:5000/api/photos/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, description, photoName, photoUrl }),
    });
    window.location.href = "/profile-page";
    return dispatch(photoUploaded(message));
  }
  console.log("res not okay");
};

export const fetchPuppyOwners = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:5000/api/photos/${id}`);
  if (!response.ok) throw response;
  const { photos } = await response.json();
  dispatch(myPuppy(photos));
};
