import { 
	TOURNAMENT_NEW,
	FETCH_TOURNAMENT_NEW,
	successTournamentNew,
	errorTournamentNew
 } from '../../../actions/tournaments/tournamentActions'
 import {
	apiRequest,
	API_SUCCESS,
	API_ERROR
 } from '../../../actions/api'

 export const newTournamentMiddleware = ({ dispatch }) => next => action => {
 	next(action)

 	switch(action.type) {
 		case FETCH_TOURNAMENT_NEW:
 			dispatch(apiRequest(action.payload, 'post', TOURNAMENT_NEW, '/api/tournaments/new'))
 			break
 		case `${TOURNAMENT_NEW} ${API_SUCCESS}`:
 			dispatch(successTournamentNew(action.payload))
 			break
 		case `${TOURNAMENT_NEW} ${API_ERROR}`:
 			dispatch(errorTournamentNew(action.payload))
 		default:
 			break
 	}
 }