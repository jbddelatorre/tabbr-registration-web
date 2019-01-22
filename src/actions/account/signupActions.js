export const SIGNUP = '[SIGNUP]'

export const FETCH_SIGNUP = `${SIGNUP} Fetch`
export const SUCCESS_SIGNUP = `${SIGNUP} Success`
export const ERROR_SIGNUP = `${SIGNUP} Error`

export const requestSignup = userData => {
	return ({
		type: FETCH_SIGNUP,
		payload: userData
	})
}

export const successSignup = ({ data }) => {
	return ({
		type: SUCCESS_SIGNUP,
		payload: data
	})
}

export const errorSignup = ({ data }) => {
	return ({
		type: ERROR_SIGNUP,
		payload: data
	})
}