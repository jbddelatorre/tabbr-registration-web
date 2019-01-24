import { combineReducers } from 'redux'
import { 
	FETCH_LOGIN,
	// CLEAR_SIGNUP,
	SUCCESS_LOGIN,
	ERROR_LOGIN
} from '../../../actions/account/loginActions';

import { 
	LOGOUT
} from '../../../actions/account/logoutActions';

const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_LOGIN:
			return true
		case SUCCESS_LOGIN:
		case ERROR_LOGIN:
			return false
		default:
			return state
	}
}

const data = (state = {}, action) => {
	switch(action.type) {
		case SUCCESS_LOGIN:
			return action.payload
		case LOGOUT:
			return {}
		default:
			return state
	}
}

export default combineReducers({
	isFetching,
	data,
})

