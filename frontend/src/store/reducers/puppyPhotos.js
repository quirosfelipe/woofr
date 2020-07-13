//ACTIONS

export const puppiesAdded = (photos) => {
	return { type: 'RECEIVE_PUPPY_PHOTOS', photos };
};

export const puppyAdded = (photo) => {
	return { type: 'RECEIVE_PUPPY_PHOTO', photo };
};

export const myPuppy = (photos) => {
  return { type: "MY_PUPPY_PHOTOS", photos };
};

//REDUCERS
export const puppyPhotoReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "RECEIVE_PUPPY_PHOTO":
      return Object.assign(newState, {
        [action.payload.photo.id]: action.payload,
      });
    case "RECEIVE_PUPPY_PHOTOS":
      let nextState = {};
      action.photos.forEach((photo) => (nextState[photo.id] = photo));
      return Object.assign(newState, nextState);
    case "MY_PUPPY_PHOTOS":
      let nextStat = {};
      action.photos.forEach((photo) => (nextStat[photo.id] = photo));
      return Object.assign(newState, nextStat);
    default:
      return state;
  }
};

//SELECTORS
export const getPhotoById = (state, id) => {
	let photo = state.photos[id];
	return photo;
};

export const getPhotos = (state) => {
	let photos = Object.values(state.photos);
	return photos;
};
