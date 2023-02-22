import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import { puppyPhotoReducer } from "./reducers/puppyPhotos";
import { photoUploadedReducer } from "./reducers/aws";
<<<<<<< HEAD

const reducers = combineReducers({
  session: authReducer,
  photos: puppyPhotoReducer,
  uploaded: photoUploadedReducer,
=======
import { sessionReducer } from "./reducers/session";

const rootReducer = combineReducers({
  session: authReducer,
  photos: puppyPhotoReducer,
  uploaded: photoUploadedReducer,
  user: sessionReducer,
>>>>>>> 3a09bbfed8aa9a23aec35ee465cbf52ab7b72c54
});

let enhancer;

<<<<<<< HEAD
=======
//Todo: add the thunk middleware
>>>>>>> 3a09bbfed8aa9a23aec35ee465cbf52ab7b72c54
if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger, thunk));
}

const configureStore = (preloadedState) => {
<<<<<<< HEAD
  return createStore(reducers, preloadedState, enhancer);
=======
  return createStore(rootReducer, preloadedState, enhancer);
>>>>>>> 3a09bbfed8aa9a23aec35ee465cbf52ab7b72c54
};

export default configureStore;
