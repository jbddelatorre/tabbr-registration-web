import { REGISTRATIONS, POST_REGISTRATION, setRegistration, errorRegistration } from '../../../actions/registration';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../../actions/api';

export const registrationMiddleware = ({ dispatch }) => next => action => {

	switch(action.type) {
		case POST_REGISTRATION:
			dispatch(apiRequest(action.payload, 'post', REGISTRATIONS, '/api/registration/register')) 
			break;
		case `${REGISTRATIONS} ${API_SUCCESS}`:
			dispatch(setRegistration(action.payload)) 
			break;
		case `${REGISTRATIONS} ${API_ERROR}`:
			dispatch(errorRegistration(action.payload)) 
			break;
		default:
			break
	}

	next(action);
}