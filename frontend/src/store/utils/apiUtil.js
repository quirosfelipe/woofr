import { puppiesAdded } from "../reducers/puppyPhotos";
import { puppyAdded } from "../reducers/puppyPhotos";
import { photoUploaded } from "../reducers/aws";
import { myPuppy } from "../reducers/puppyPhotos";
import { baseUrl } from "../../config";

export const fetchPuppyPhotos = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/api/photos`);
  if (!response.ok) throw response;
  const { photos } = await response.json();
  dispatch(puppiesAdded(photos));
};

export const fetchPuppyPhoto = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/api/photos/photo/${id}`);
  if (!response.ok) throw response;
  const { photo, comments } = await response.json();
  photo.comments = comments;
  let payload = { ...photo };
  dispatch(puppyAdded(payload));
};

export const postToAws = (formData, userId, description, photoName) => async (
  dispatch
) => {
  // ("in the aws route", description, photoName);
  let response = await fetch(`${baseUrl}/api/${userId}/upload`, {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    const { photoUrl } = await response.json();
    // ("photourl -> ", photoUrl);
    const message = "upload success";
    await fetch(`${baseUrl}/api/photos/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, description, photoName, photoUrl }),
    });
    window.location.href = "/profile-page";
    return dispatch(photoUploaded(message));
  }
  // ("res not okay");
};

export const fetchPuppyOwners = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/api/photos/${id}`);
  if (!response.ok) throw response;
  const { photos } = await response.json();
  dispatch(myPuppy(photos));
};
