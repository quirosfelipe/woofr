import { baseUrl } from "../../config";

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const SET_TOKEN = "session/SET_TOKEN";
const REMOVE_TOKEN = "session/REMOVE_TOKEN";

const setUser = (user) => ({ type: SET_USER, user });

const removeUser = () => ({ type: REMOVE_USER });

const setToken = (token) => ({ type: SET_TOKEN, token });

const removeToken = () => ({ type: REMOVE_TOKEN });

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw response;

    const { access_token, user } = await response.json();
    dispatch(setToken(access_token));
    dispatch(setUser(user));
    return;
  };

export const logoutUser = () => async (dispatch) => {
  dispatch(removeUser());
  dispatch(removeToken());
};

export const signupUser =
  ({ username, email, password }) =>
  async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/session/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });

    if (!response.ok) throw response;

    const { access_token, user } = await response.json();
    dispatch(setToken(access_token));
    dispatch(setUser(user));
    return;
  };

let initialState = { accessToken: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        [action.user.id]: action.user,
      };
    case REMOVE_USER:
      let newState = { ...state };
      delete newState.session.user;
      return newState;
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.token,
      };
    case REMOVE_TOKEN:
      let nextState = { ...state };
      delete nextState.accessToken;
      return nextState;
    default:
      return state;
  }
}
