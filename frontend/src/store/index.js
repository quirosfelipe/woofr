import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import { puppyPhotoReducer } from "./reducers/puppyPhotos";
import { photoUploadedReducer } from "./reducers/aws";

const reducers = combineReducers({
  session: authReducer,
  photos: puppyPhotoReducer,
  uploaded: photoUploadedReducer,
});

let enhancer;

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger, thunk));
}

const configureStore = (preloadedState) => {
  return createStore(reducers, preloadedState, enhancer);
};

export default configureStore;
