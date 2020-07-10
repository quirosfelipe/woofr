import { baseUrl } from '../../config';

export const TOKEN_KEY = 'woofr/authentication/token';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

//ACTIONS

const removeToken = () => {
	return {
		type: REMOVE_TOKEN,
	};
};

const setToken = (access_token) => {
	// debugger
	return {
		type: SET_TOKEN,
		access_token,
	};
};

export const loadToken = () => async (dispatch) => {
	const access_token = window.localStorage.getItem(TOKEN_KEY);
	if (access_token) {
		dispatch(setToken(access_token));
	}
};

export const login = (email, password) => async (dispatch) => {
	try {
		// debugger;
		const response = await fetch(`${baseUrl}/api/session/`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			const { access_token } = await response.json();
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
		method: 'delete',
		headers: { Authorization: `Bearer ${access_token}` },
	});

	if (response.ok) {
		window.localStorage.removeItem(TOKEN_KEY);
		dispatch(removeToken());
	}
};

export const signup = (email, password) => async (dispatch) => {
	const response = await fetch(`${baseUrl}/session`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (response.ok) {
		const { token } = await response.json();
		window.localStorage.setItem(TOKEN_KEY, token);
		dispatch(setToken(token));
		window.location.href = '/puppyfeed';
	}
};

//REDUCERS
const initialState = {
	token: '',
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
				token: action.token,
			};
		}
		case REMOVE_TOKEN: {
			const newState = { ...state };
			delete newState.token;
			return newState;
		}
		default: {
			return state;
		}
	}
};
