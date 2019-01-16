import { 
	CHANGEREGISTRATION, 
	FETCH_CHANGEREGISTRATION,
	successChangeRegistration,
	errorChangeRegistration
 } from '../../../actions/viewregistration/viewregistrationChangeAction'

 import { 
	successViewRegistration,
	errorViewRegistration
 } from '../../../actions/viewregistration'

import { API_SUCCESS, API_ERROR, apiRequest } from '../../../actions/api';

export const changeRegistrationMiddleware = ({ dispatch }) => next => action => {
	next(action)

	switch(action.type) {
		case FETCH_CHANGEREGISTRATION:
			console.log('hellooo')
			dispatch(apiRequest(action.payload, 'post', CHANGEREGISTRATION, "/api/viewregistration/update"))
			break
		case `${CHANGEREGISTRATION} ${API_SUCCESS}`:
			dispatch(successViewRegistration(action.payload))
			break
		case `${CHANGEREGISTRATION} ${API_ERROR}`:
			dispatch(errorViewRegistration(action.payload))
			break
		default:
			break
	}
}