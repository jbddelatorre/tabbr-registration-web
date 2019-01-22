import { 
	LOGIN,
	FETCH_LOGIN,
	successLogin,
	errorLogin
} from '../../../actions/account/loginActions' 

import {
	API_SUCCESS,
	API_ERROR,
	apiRequest,
} from '../../../actions/api'

export const loginMiddleware = ({dispatch}) => next => action => {
	next(action);

	switch(action.type) {
		case FETCH_LOGIN:
			dispatch(apiRequest(action.payload, 'post', LOGIN, '/api/login'))
			break
		case `${LOGIN} ${API_SUCCESS}`:
			dispatch(successLogin(action.payload))
			break
		case `${LOGIN} ${API_ERROR}`:
			dispatch(errorLogin(action.payload))
			break
		default:
			return true
	}
}	