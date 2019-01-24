export const VIEWREGISTRATION = "[VIEWREGISTRATION]";

export const FETCH_VIEWREGISTRATION = `${VIEWREGISTRATION} Fetch`;
export const SET_VIEWREGISTRATION = `${VIEWREGISTRATION} Set`;
export const ERROR_VIEWREGISTRATION = `${VIEWREGISTRATION} Error`;

export const CLEAR_VIEWREGISTRATION = `${VIEWREGISTRATION} Clear Loader`;

export const CLEARERROR_VIEWREGISTRATION = `${VIEWREGISTRATION} Clear Error`;

export const requestViewRegistration = (userData) => {
	return {
		type: FETCH_VIEWREGISTRATION,
		payload: userData
	}
}

export const successViewRegistration = ({ data }) => {
	return {
		type: SET_VIEWREGISTRATION,
		payload: data
	}
}

export const errorViewRegistration = ({ data }) => {
	return {
		type: ERROR_VIEWREGISTRATION,
		payload: data
	}
}

export const clearViewRegistration = () => {
	return {
		type: CLEAR_VIEWREGISTRATION
	}
}
