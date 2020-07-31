import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import { puppyPhotoReducer } from "./reducers/puppyPhotos";
import { photoUploadedReducer } from "./reducers/aws";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  session: authReducer,
  photos: puppyPhotoReducer,
  uploaded: photoUploadedReducer,
});

const configureStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};
export default configureStore;
