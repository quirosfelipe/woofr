import { baseUrl } from "../../config";

export const TOKEN_KEY = "woofr/authentication/token";
// export const USER_INFO = "USER_INFO";
export const USER_EMAIL = "USER_EMAIL";
export const USER_NAME = "USER_NAME";
export const USER_ID = "USER_ID";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

//ACTIONS
const updatePassword = (value) => ({
  type: UPDATE_PASSWORD,
  value,
});

const updateEmail = (value) => ({
  type: UPDATE_EMAIL,
  value,
});

export const actions = {
  updateEmail,
  updatePassword,
};

const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  };
};

const setToken = (access_token) => ({ type: SET_TOKEN, access_token });
//const setComment = (access_token) => ({ type: SET_TOKEN, access_token });

export const loadToken = () => async (dispatch) => {
  const access_token = window.localStorage.getItem(TOKEN_KEY);
  if (access_token) {
    dispatch(setToken(access_token));
  }
};

export const submitComment = (comment, userId, photoId) => async (dispatch) => {
  console.log("this is the request", userId, comment, photoId);
  try {
    // debugger;
    console.log("retrieving");
    //   console.log(JSON.stringify({ email, password }));
    const response = await fetch(`http://localhost:5000/api/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, photoId, comment }),
    });
    // console.log("done");
    //     console.log("failed");
    //     if (response.ok) {
    //       console.log("here");
    //       const { access_token, user } = await response.json();
    //       console.log("these are", userId, photoId, comment);
    //       return dispatch(setToken(access_token));
    //     }
  } catch (error) {
    //     console.error(error);
    //   }
  }
};

export const login = (email, password) => async (dispatch) => {
	console.log(email, password);
	try {
		console.log('retrieving');
		console.log(JSON.stringify({ email, password }));
		const response = await fetch(`http://localhost:5000/api/session`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});

    console.log("failed");
    if (response.ok) {
      console.log("here");
      const { access_token, user } = await response.json();
      console.log("these are", access_token, user);
      window.localStorage.setItem(USER_EMAIL, user.email);
      window.localStorage.setItem(USER_NAME, user.user_name);
      window.localStorage.setItem(USER_ID, user.id);
      window.localStorage.setItem(TOKEN_KEY, access_token);
      return dispatch(setToken(access_token));
    }
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => async (dispatch, getState) => {
  const {
    session: { access_token },
  } = getState();
  const response = await fetch(`${baseUrl}/session`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${access_token}` },
  });

  if (response.ok) {
    console.log("inside local storage");
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
  }
};

export const signup = (user_name, email, password) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/session/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_name, email, password }),
  });

  if (response.ok) {
    const { access_token, user } = await response.json();

    window.localStorage.setItem(USER_EMAIL, user.email);
    window.localStorage.setItem(USER_NAME, user.user_name);
    window.localStorage.setItem(USER_ID, user.id);
    window.localStorage.setItem(TOKEN_KEY, access_token);
    dispatch(setToken(access_token, user));
    window.location.href = "/puppyfeed";
  }
};

//REDUCERS
const initialState = {
  access_token: "",
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL: {
      return {
        ...state,
        email: action.value,
      };
    }
    case UPDATE_PASSWORD: {
      return {
        ...state,
        password: action.value,
      };
    }
    case SET_TOKEN: {
      return {
        ...state,
        access_token: action.access_token,
      };
    }
    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.access_token;
      return newState;
    }
    default: {
      return state;
    }
  }
};
