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

const data = (state = {
	 "_id": {
        "$oid": "5c3a70e08e61191c70463ac7"
    },
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
		case SET_REGISTRATION:
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