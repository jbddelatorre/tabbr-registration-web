import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import { middleware } from './middleware'
// import thunk from 'redux-thunk';


const initialState = {};

// const allMiddleware = [thunk, ...middleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,  
	initialState,
	composeEnhancers(applyMiddleware(...middleware),
	),

);

export default store;