import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from '../localStorage'
import { middleware } from './middleware'
// import thunk from 'redux-thunk';


const persistedState = loadState();

// const allMiddleware = [thunk, ...middleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,  
	persistedState,
	composeEnhancers(applyMiddleware(...middleware),
	),
);

store.subscribe(() => {
	saveState(store.getState())
})

export default store;