import { combineReducers } from 'redux'
import { 
	POST_REGISTRATION,
	SET_REGISTRATION,
	ERROR_REGISTRATION
} from '../../actions/registration';


const isFetching = (state = false, action) => {
	switch(action.type) {
		case POST_REGISTRATION:
			return true
		case SET_REGISTRATION:
		case ERROR_REGISTRATION:
			return false
		default:
			return state
	}
}

const data = (state = {}, action) => {
	switch(action.type) {
		case SET_REGISTRATION:
			return action.payload
		default:
			return state
	}
}

const error = (state = {}, action) => {
	switch(action.type) {
		case ERROR_REGISTRATION:
			return action.payload
		default:
			return state
	}
}

export default combineReducers({
	isFetching,
	data,
	error
})