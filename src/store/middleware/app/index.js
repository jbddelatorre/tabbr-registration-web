import { registrationMiddleware } from './registration';
import { viewregistrationMiddleware } from './viewregistration';
import { changeRegistrationMiddleware } from './changeregistration';
import { signupMiddleware } from './signup';
import { loginMiddleware } from './login';
import { newTournamentMiddleware } from './newtournament';
import { userTournamentMiddleware } from './usertournaments';

export const appMiddleware = [
	signupMiddleware,
	registrationMiddleware,
	changeRegistrationMiddleware,
	viewregistrationMiddleware,
	loginMiddleware,
	newTournamentMiddleware,
	userTournamentMiddleware
];