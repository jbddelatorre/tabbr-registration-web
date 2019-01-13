export const REGISTRATIONS = '[REGISTRATIONS]';

export const POST_REGISTRATION = `${REGISTRATIONS} Post`;
export const SET_REGISTRATION = `${REGISTRATIONS} Set`;
export const ERROR_REGISTRATION = `${REGISTRATIONS} Error`;

export const registerRepresentative = (userData) => ({
	type: POST_REGISTRATION,
	payload: userData
})

export const setRegistration = ({ data }) => ({
	type: SET_REGISTRATION,
	payload: data.data
})

export const errorRegistration = ({ data }) => ({
	type: ERROR_REGISTRATION,
	payload: data.data
})

