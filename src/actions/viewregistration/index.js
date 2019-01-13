export const VIEWREGISTRATION = "[VIEWREGISTRATION]";

export const FETCH_VIEWREGISTRATION = `${VIEWREGISTRATION} Fetch`;
export const SET_VIEWREGISTRATION = `${VIEWREGISTRATION} Set`;
export const ERROR_VIEWREGISTRATION = `${VIEWREGISTRATION} Error`;

export const requestViewRegistration = (userData) => {
	console.log(FETCH_VIEWREGISTRATION)
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