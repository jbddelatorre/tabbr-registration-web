import { combineReducers } from 'redux';
import authReducer from './authReducer';
import representativeReducer from './representativeReducer';

export default combineReducers({
	auth: authReducer,
	representative: representativeReducer,
});