import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import { puppyPhotoReducer } from "./reducers/puppyPhotos";
import { photoUploadedReducer } from "./reducers/aws";
import { sessionReducer } from "./reducers/session";

const rootReducer = combineReducers({
  session: authReducer,
  photos: puppyPhotoReducer,
  uploaded: photoUploadedReducer,
  user: sessionReducer,
});

let enhancer;

//Todo: add the thunk middleware
if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger, thunk));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
