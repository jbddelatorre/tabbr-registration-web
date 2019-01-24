import {
	VIEWREGISTRATION,
	FETCH_VIEWREGISTRATION,
	successViewRegistration,
	errorViewRegistration
} from '../../../actions/viewregistration';

import { API_SUCCESS, API_ERROR, apiRequest } from '../../../actions/api';

export const viewregistrationMiddleware = ({ dispatch }) => next => action => {
	next(action)

	switch(action.type) {
		case FETCH_VIEWREGISTRATION:
			dispatch(apiRequest(action.payload, "post", VIEWREGISTRATION, "/api/viewregistration"))
			break
		case `${VIEWREGISTRATION} ${API_SUCCESS}`:
			dispatch(successViewRegistration(action.payload))
			break
		case `${VIEWREGISTRATION} ${API_ERROR}`:
			dispatch(errorViewRegistration(action.payload))
			break
		default:
			break
	}
} 