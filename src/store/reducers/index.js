import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import viewregistrationReducer from './viewRegistrationReducer';

export default combineReducers({
	auth: authReducer,
	registration: registrationReducer,
	viewregistration: viewregistrationReducer,
});