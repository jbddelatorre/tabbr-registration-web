import { combineReducers } from 'redux'
import { SET_LOADER, REMOVE_LOADER } from '../../actions/ui/loader'
import { API_ERROR } from '../../actions/api'

const isLoading = (state = false, action) => {
	switch(action.type) {
		case SET_LOADER:
			return true
		case REMOVE_LOADER:
			return false
		default:
			return state
	}
}

const errors = (state = {}, action) => {
	if(action.type.includes(API_ERROR)) {
		return action.payload
	} else {
		return state
	}
}

export default combineReducers({
	isLoading,
	errors
})