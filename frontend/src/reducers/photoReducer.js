import { SHOW_ALL_PUPPIES } from "../actions/photosActions";

const photoReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case SHOW_ALL_PUPPIES:
      return Object.assign(newState, {
        [action.photos.id]: action.photos,
      });
    case SHOW_ALL_PUPPIES:
      let newState = {};
      action.photos.forEach((photo) => (nextState[photo.id] = photo));
      return Object.assign(newState, nextState);
    default:
      return state;
  }
};

//selector functions
export const getAllPhotos = (state) => {
  let photos = state.photos;
  return photos;
};

export default photoReducer;
