import { combineReducers } from 'redux'
import { 
	REPRESENTATIVE_REQUEST, 
	REPRESENTATIVE_SUCCESS, 
	REPRESENTATIVE_ERROR, 
} from '../actions/types';


const isFetching = (state = false, action) => {
	switch(action.type) {
		case REPRESENTATIVE_REQUEST:
			return true
		case REPRESENTATIVE_SUCCESS:
		case REPRESENTATIVE_ERROR:
			return false
		default:
			return state
	}
}

const data = (state = {}, action) => {
	switch(action.type) {
		case REPRESENTATIVE_REQUEST:
		case REPRESENTATIVE_ERROR:
			return {}
		case REPRESENTATIVE_SUCCESS:
			return action.payload
		default:
			return state
	}
}

export default combineReducers({
	isFetching,
	data
})