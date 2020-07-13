//ACTIONS

export const photoUploaded = (message) => {
	return { type: 'PHOTO_UPLOADED', message };
};

//REDUCERS
export const photoUploadedReducer = (state = {}, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'PHOTO_UPLOADED':
			return Object.assign(newState, {
				success: action.message,
			});
		default:
			return state;
	}
};

//SELECTORS
export const successMessage = (state) => {
	let message = state.message;
	return message;
};
