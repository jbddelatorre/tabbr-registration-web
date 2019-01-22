export const LOGIN = '[LOGIN]'

export const FETCH_LOGIN = `${LOGIN} Fetch`
export const SUCCESS_LOGIN = `${LOGIN} Success`
export const ERROR_LOGIN = `${LOGIN} Error`

export const requestLogin = userData => {
	return ({
		type: FETCH_LOGIN,
		payload: userData
	})
}

export const successLogin = ({ data }) => {
	return ({
		type: SUCCESS_LOGIN,
		payload: data
	})
}

export const errorLogin = ({ data }) => {
	return ({
		type: ERROR_LOGIN,
		payload: data
	})
}