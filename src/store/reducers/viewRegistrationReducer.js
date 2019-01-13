import { combineReducers } from 'redux'
import { 
	FETCH_VIEWREGISTRATION,
	SET_VIEWREGISTRATION,
	ERROR_VIEWREGISTRATION
} from '../../actions/viewregistration';


const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_VIEWREGISTRATION:
			return true
		case SET_VIEWREGISTRATION:
		case ERROR_VIEWREGISTRATION:
			return false
		default:
			return state
	}
}

const data = (state = {}, action) => {
	switch(action.type) {
		case SET_VIEWREGISTRATION:
			return action.payload
		default:
			return state
	}
}

const error = (state = {}, action) => {
	switch(action.type) {
		case ERROR_VIEWREGISTRATION:
			return action.payload
		case SET_VIEWREGISTRATION:
			return {}
		default:
			return state
	}
}

export default combineReducers({
	isFetching,
	data,
	error
})