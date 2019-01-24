import { coreMiddleware } from './core'
import { appMiddleware } from './app'

export const middleware = [
	...coreMiddleware,
	...appMiddleware
];