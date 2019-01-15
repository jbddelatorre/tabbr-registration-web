import { combineReducers } from 'redux'
import { SET_LOADER, REMOVE_LOADER } from '../../actions/ui/loader'


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

export default combineReducers({
	isLoading
})