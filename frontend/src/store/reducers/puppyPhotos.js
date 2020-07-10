//ACTIONS

export const puppiesAdded = (photos) => {
  return { type: "REVEIVE_PUPPY_PHOTOS", photos };
};

export const puppyAdded = (photo) => {
  return { type: "REVEIVE_PUPPY_PHOTO", photo };
};

//REDUCERS
export const puppyPhotoReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "REVEIVE_PUPPY_PHOTO":
      return Object.assign(newState, { [action.photos.id]: action.photos });
    case "REVEIVE_PUPPY_PHOTOS":
      let nextState = {};
      action.photos.forEach((photo) => (nextState[photo.id] = photo));
      return Object.assign(newState, nextState);
    default:
      return state;
  }
};

//SELECTORS
export const getPhotoById = (state, id) => {
  let photo = Object.values(state.photos).filter((photo) => photo.id === id);
  return photo;
};

export const getPhotos = (state) => {
  let photos = Object.values(state.photos);
  return photos;
};
