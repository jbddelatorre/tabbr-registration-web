import { 
	CHANGEREGISTRATION, 
	FETCH_CHANGEREGISTRATION,
	successChangeRegistration,
	errorChangeRegistration
 } from '../../../actions/viewregistration/viewregistrationChangeAction'

import { API_SUCCESS, API_ERROR, apiRequest } from '../../../actions/api';

export const changeRegistrationMiddleware = ({ dispatch }) => next => action => {
	next(action)

	switch(action.type) {
		case FETCH_CHANGEREGISTRATION:
			dispatch(apiRequest())
		default
			return null
	}
}