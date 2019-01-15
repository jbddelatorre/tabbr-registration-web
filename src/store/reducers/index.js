import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import viewregistrationReducer from './viewRegistrationReducer';

export default combineReducers({
	app: appReducer,
	auth: authReducer,
	registration: registrationReducer,
	viewregistration: viewregistrationReducer,
});