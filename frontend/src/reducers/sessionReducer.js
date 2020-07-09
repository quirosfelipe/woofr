import { SET_TOKEN, REMOVE_TOKEN } from "../actions/sessionActions";

const initialState = {
  id: null,
  access_token: null,
};
const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case SET_TOKEN:
      // debugger
      return Object.assign(nextState, { access_token: action.access_token });
    case REMOVE_TOKEN:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
