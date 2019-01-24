import axios from 'axios';
import { 
	REPRESENTATIVE_REQUEST,
	REPRESENTATIVE_SUCCESS,
	REPRESENTATIVE_ERROR,	
 } from './types';

export const registerRepresentative = (userData) => dispatch => {
	dispatch({
		type: REPRESENTATIVE_REQUEST,
	});
	request(userData, dispatch);
} 

const request = async (userData, dispatch) => {
	try {
		const res = await axios.post('/api/representatives/register', userData);
		dispatch(success(res))
	} 
	catch(err) {
		dispatch(fail(err));
	}
}

const success = (res) => {
	return {
		type: REPRESENTATIVE_SUCCESS,
		payload: res.data
	}
}

const fail = (err) => {
	return {
		type: REPRESENTATIVE_ERROR,
		payload: err
	}
}