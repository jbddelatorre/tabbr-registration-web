export const loggerMiddleware = store => next => action => {
	console.log(`Dispatching: ${action.type}`) 
	next(action)
}