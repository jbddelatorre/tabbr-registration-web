import { combineReducers } from 'redux'
import { 
	FETCH_SIGNUP,
	// CLEAR_SIGNUP,
	SUCCESS_SIGNUP,
	ERROR_SIGNUP
} from '../../../actions/account/signupActions';


const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_SIGNUP:
			return true
		case SUCCESS_SIGNUP:
		case ERROR_SIGNUP:
			return false
		default:
			return state
	}
}

const data = (state = {}, action) => {
	switch(action.type) {
		case SUCCESS_SIGNUP:
			return action.payload.data
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

