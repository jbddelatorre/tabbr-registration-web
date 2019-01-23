import {
	USER_TOURNAMENTS,
	FETCH_USER_TOURNAMENTS,
	successUserTournaments,
	errorUserTournaments
} from '../../../actions/account/fetchTournamentsActions'

import {
	API_SUCCESS,
	API_ERROR,
	apiRequest
} from '../../../actions/api'


export const userTournamentMiddleware = ({ dispatch }) => next => action => {
	next(action)

	switch(action.type){
		case FETCH_USER_TOURNAMENTS:
			dispatch(apiRequest(action.payload, 'get', USER_TOURNAMENTS, `/api/tournaments/${action.payload}`))
			break;
		case `${USER_TOURNAMENTS} ${API_SUCCESS}`:
			dispatch(successUserTournaments(action.payload))
			break;
		case `${USER_TOURNAMENTS} ${API_ERROR}`:
			dispatch(errorUserTournaments(action.payload))
			break;
		default:
			break
	}

}