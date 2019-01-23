import { combineReducers } from 'redux'
import { 
	FETCH_USER_TOURNAMENTS,
	// CLEAR_SIGNUP,
	SUCCESS_USER_TOURNAMENTS,
	ERROR_USER_TOURNAMENTS
} from '../../../actions/account/fetchTournamentsActions';

import { 
	LOGOUT
} from '../../../actions/account/logoutActions';

const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_USER_TOURNAMENTS:
			return true
		case SUCCESS_USER_TOURNAMENTS:
		case ERROR_USER_TOURNAMENTS:
			return false
		default:
			return state
	}
}

const data = (state = {}, action) => {
	switch(action.type) {
		case SUCCESS_USER_TOURNAMENTS:
			return action.payload.data.tournaments
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
