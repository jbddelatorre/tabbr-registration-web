export const TOURNAMENT_NEW = '[TOURNAMENT_NEW]'

export const FETCH_TOURNAMENT_NEW = `${TOURNAMENT_NEW} Fetch`
export const SUCCESS_TOURNAMENT_NEW = `${TOURNAMENT_NEW} Success`
export const ERROR_TOURNAMENT_NEW = `${TOURNAMENT_NEW} Error`

export const requestTournamentNew = userData => {
	return ({
		type: FETCH_TOURNAMENT_NEW,
		payload: userData
	})
}

export const successTournamentNew = ({ data }) => {
	return ({
		type: SUCCESS_TOURNAMENT_NEW,
		payload: data
	})
}

export const errorTournamentNew = ({ data }) => {
	return ({
		type: ERROR_TOURNAMENT_NEW,
		payload: data
	})
}