import { loggerMiddleware } from './logger';
import { apiMiddleware } from './apiCall';

export const coreMiddleware = [ 
	loggerMiddleware,
	apiMiddleware
];