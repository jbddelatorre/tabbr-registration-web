import history from '../../utils/history'

export const LOGOUT = '[LOGOUT]'

export const logoutRequest = () => {
	sessionStorage.removeItem('jwtToken')
	history.push('/')

	return ({
		type: LOGOUT
	})
} 