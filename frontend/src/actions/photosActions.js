import { baseUrl } from "../config";

export const SHOW_ALL_PUPPIES = "SHOW_ALL_PUPPIES";

const showAllPuppies = (photos) => {
  return {
    type: SHOW_ALL_PUPPIES,
    photos,
  };
};

export const fetchAllPhotos = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/api/photos`);

  if (response.ok) {
    const photos = await response.json();
    dispatch(showAllPuppies(photos));
  }
};
