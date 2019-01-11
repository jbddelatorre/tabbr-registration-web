export const loggerMiddleware = store => next => action => {
	console.log(`Dispatching: ${action.type}`)
	let result = next(action)
	return result
}