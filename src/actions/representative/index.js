export const REPRESENTATIVES = '[REPRESENTATIVES]';

export const POST_REPRESENTATIVE = `${REPRESENTATIVES} Post`;
export const SET_REPRESENTATIVE = `${REPRESENTATIVES} Set`;

export const registerRepresentative = (userData) => ({
	type: POST_REPRESENTATIVE,
	payload: userData
})

export const setRepresentative = ({ data }) => ({
	type: SET_REPRESENTATIVE,
	payload: data
})