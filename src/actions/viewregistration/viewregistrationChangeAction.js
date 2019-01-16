export const CHANGEREGISTRATION = "[CHANGEREGISTRATION]";

export const FETCH_CHANGEREGISTRATION = `${CHANGEREGISTRATION} Fetch`;
export const SET_CHANGEREGISTRATION = `${CHANGEREGISTRATION} Set`;
export const ERROR_CHANGEREGISTRATION = `${CHANGEREGISTRATION} Error`;

export const CLEAR_VIEWREGISTRATION = `${CHANGEREGISTRATION} Clear Loader`;

//export const CLEARERROR_VIEWREGISTRATION = `${CHANGEREGISTRATION} Clear Error`;

export const requestChangeRegistration = (changeData) => {
	return {
		type: FETCH_CHANGEREGISTRATION,
		payload: changeData
	}
}

export const successChangeRegistration = ({ data }) => {
	return {
		type: SET_CHANGEREGISTRATION,
		payload: data
	}
}

export const errorChangeRegistration = ({ data }) => {
	return {
		type: ERROR_CHANGEREGISTRATION,
		payload: data
	}
}

// export const clearViewRegistration = () => {
// 	return {
// 		type: CLEAR_VIEWREGISTRATION
// 	}
// }