import { registrationMiddleware } from './registration';
import { viewregistrationMiddleware } from './viewregistration';
import { changeRegistrationMiddleware } from './changeregistration';

export const appMiddleware = [
	registrationMiddleware,
	changeRegistrationMiddleware,
	viewregistrationMiddleware,
];