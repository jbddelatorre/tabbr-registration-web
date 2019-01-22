import { registrationMiddleware } from './registration';
import { viewregistrationMiddleware } from './viewregistration';
import { changeRegistrationMiddleware } from './changeregistration';
import { signupMiddleware } from './signup';
import { loginMiddleware } from './login';

export const appMiddleware = [
	signupMiddleware,
	registrationMiddleware,
	changeRegistrationMiddleware,
	viewregistrationMiddleware,
	loginMiddleware
];