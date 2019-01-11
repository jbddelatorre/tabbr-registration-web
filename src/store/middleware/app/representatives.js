import { REPRESENTATIVES, POST_REPRESENTATIVE, setRepresentative } from '../../../actions/representative';
import { API_SUCCESS, apiRequest } from '../../../actions/api';

export const representativeMiddleware = ({ dispatch }) => next => action => {

	switch(action.type) {
		case POST_REPRESENTATIVE:
			dispatch(apiRequest(action.payload, 'post', REPRESENTATIVES, '/api/representatives/register')) 
			break;
		case `${REPRESENTATIVES} ${API_SUCCESS}`:
			dispatch(setRepresentative(action.payload)) 
			break;
		default:
			break
	}

	next(action);
}