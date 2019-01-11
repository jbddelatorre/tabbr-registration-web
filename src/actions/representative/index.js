export const REPRESENTATIVES = '[REPRESENTATIVES]';

export const POST_REPRESENTATIVE = `${REPRESENTATIVES} Post`;
export const SET_REPRESENTATIVE = `${REPRESENTATIVES} Set`;
export const ERROR_REPRESENTATIVE = `${REPRESENTATIVES} Error`;

export const registerRepresentative = (userData) => ({
	type: POST_REPRESENTATIVE,
	payload: userData
})

export const setRepresentative = ({ data }) => ({
	type: SET_REPRESENTATIVE,
	payload: data
})

export const errorRepresentative = ({ data }) => ({
	type: ERROR_REPRESENTATIVE,
	payload: data
})

