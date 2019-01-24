import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import viewregistrationReducer from './viewRegistrationReducer';
import accountReducer from './accountReducer';

export default combineReducers({
	app: appReducer,
	account: accountReducer,
	registration: registrationReducer,
	viewregistration: viewregistrationReducer,
});