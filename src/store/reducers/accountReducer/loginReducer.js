import { combineReducers } from 'redux'
import { 
	FETCH_LOGIN,
	// CLEAR_SIGNUP,
	SUCCESS_LOGIN,
	ERROR_LOGIN
} from '../../../actions/account/loginActions';


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
		// case CLEAR_SIGNUP:
		// 	return {}
		default:
			return state
	}
}

export default combineReducers({
	isFetching,
	data,
})

