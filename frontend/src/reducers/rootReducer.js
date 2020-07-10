import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import photoReducer from "./photoReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  photos: photoReducer,
});

export default rootReducer;
