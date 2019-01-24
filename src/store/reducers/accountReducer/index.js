import { combineReducers } from 'redux';

import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import tournamentsReducer from './tournamentsReducer'

export default combineReducers({
	signup: signupReducer,
	login: loginReducer,
	tournaments: tournamentsReducer
})

