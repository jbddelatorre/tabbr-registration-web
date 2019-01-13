import { API_REQUEST, apiSuccess, apiError } from '../../../../actions/api';
import axios from 'axios';

export const apiMiddleware = ({ dispatch }) => next => async action => {
	next(action);
	
	if(action.type.includes(API_REQUEST)) {
		const { method, entity, url } = action.payload.meta

		try {
			const response = await axios[method](url, action.payload.data)
			dispatch(apiSuccess(response, entity));
		}
		catch(err) {
			dispatch(apiError(err, entity))
		}
	}
}
