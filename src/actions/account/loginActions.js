import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode';

import history from '../../utils/history'

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
	const token = data.data.token
	sessionStorage.setItem('jwtToken', token);
	setAuthToken(token)
	const decoded = jwt_decode(token)

	history.push('/dashboard')

	return ({
		type: SUCCESS_LOGIN,
		payload: decoded
	})
}

export const errorLogin = ({ data }) => {
	return ({
		type: ERROR_LOGIN,
		payload: data
	})
}