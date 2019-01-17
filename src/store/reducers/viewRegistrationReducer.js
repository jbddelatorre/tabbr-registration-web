import { combineReducers } from 'redux'
import { 
	FETCH_VIEWREGISTRATION,
	SET_VIEWREGISTRATION,
	ERROR_VIEWREGISTRATION,
	CLEAR_VIEWREGISTRATION
} from '../../actions/viewregistration';

import { FETCH_CHANGEREGISTRATION } from '../../actions/viewregistration/viewregistrationChangeAction'

const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_CHANGEREGISTRATION:
		case FETCH_VIEWREGISTRATION:
			return true
		case SET_VIEWREGISTRATION:
		case ERROR_VIEWREGISTRATION:
			return false
		default:
			return state
	}
}

const data = (state = {
	"_id":"5c3a70e08e61191c70463ac7",
    "institution": "hello",
    "representative": "hi",
    "email": "123@123.com",
    "contact": "123",
    "num_teams": 2,
    "num_adj": 4,
    "num_obs": 3,
    "registration_code": "5263HG",
    "__v": 0

}, action) => {
	switch(action.type) {
		case SET_VIEWREGISTRATION:
			return action.payload.data
		case CLEAR_VIEWREGISTRATION:
			return {}
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

const changedField = (state = "", action) => {
	switch(action.type) {
		case FETCH_CHANGEREGISTRATION:
			return action.payload.field
		default:
			return state
	}
}

const didRequestChange = (state = false, action) => {
	switch(action.type) {
		case FETCH_CHANGEREGISTRATION:
			return true
		default:
			return state
	}
}

export default combineReducers({
	isFetching,
	data,
	error,
	changedField,
	didRequestChange
})