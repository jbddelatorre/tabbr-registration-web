import { registrationMiddleware } from './registration';
import { viewregistrationMiddleware } from './viewregistration';

export const appMiddleware = [
	registrationMiddleware,
	viewregistrationMiddleware
];