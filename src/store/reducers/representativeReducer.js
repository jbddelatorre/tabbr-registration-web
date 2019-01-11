import { combineReducers } from 'redux'
import { 
	POST_REPRESENTATIVE,
	SET_REPRESENTATIVE,
	ERROR_REPRESENTATIVE
} from '../../actions/representative';


const isFetching = (state = false, action) => {
	switch(action.type) {
		case POST_REPRESENTATIVE:
			return true
		case SET_REPRESENTATIVE:
		case ERROR_REPRESENTATIVE:
			return false
		default:
			return state
	}
}

const data = (state = {}, action) => {
	switch(action.type) {
		case SET_REPRESENTATIVE:
			return action.payload
		default:
			return state
	}
}

const error = (state = {}, action) => {
	switch(action.type) {
		case ERROR_REPRESENTATIVE:
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