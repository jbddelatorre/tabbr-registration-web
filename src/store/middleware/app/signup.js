import {
	SIGNUP,
	FETCH_SIGNUP,
	successSignup,
	errorSignup
} from '../../../actions/account/signupActions'

import {
	apiRequest,
	API_SUCCESS,
	API_ERROR
} from '../../../actions/api'

export const signupMiddleware = ({ dispatch }) => next => action => {
	next(action)

	switch(action.type) {
		case FETCH_SIGNUP:
			dispatch(apiRequest(action.payload, 'post', SIGNUP, '/api/account/signup'))
			break
		case `${SIGNUP} ${API_SUCCESS}`:
			dispatch(successSignup(action.payload))
			break
		case `${SIGNUP} ${API_ERROR}`:
			dispatch(errorSignup(action.payload))
			break
		default:
			break
	}

}