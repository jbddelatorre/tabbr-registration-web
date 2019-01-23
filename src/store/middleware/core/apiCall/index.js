import { API_REQUEST, apiSuccess, apiError } from '../../../../actions/api';
import { setLoader, removeLoader } from '../../../../actions/ui/loader';
import axios from 'axios';

export const apiMiddleware = ({ dispatch }) => next => async action => {
	next(action);
	
	if(action.type.includes(API_REQUEST)) {
		const { method, entity, url } = action.payload.meta

		dispatch(setLoader())

		try {

			if(method === 'post') {
				const response = await axios[method](url, action.payload.data)
				dispatch(apiSuccess(response, entity));
			}
			if(method === 'get') {
				const response = await axios.get(url)
				dispatch(apiSuccess(response, entity));
			}

			
		}
		catch(err) {
			dispatch(apiError(err, entity))
		}

		dispatch(removeLoader())
	}
}
