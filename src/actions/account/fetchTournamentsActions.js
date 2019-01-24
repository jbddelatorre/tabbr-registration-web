export const USER_TOURNAMENTS = '[USER_TOURNAMENTS]'

export const FETCH_USER_TOURNAMENTS = `${USER_TOURNAMENTS} Fetch`
export const SUCCESS_USER_TOURNAMENTS = `${USER_TOURNAMENTS} Success`
export const ERROR_USER_TOURNAMENTS = `${USER_TOURNAMENTS} Error`

export const requestUserTournaments = userData => {
	return ({
		type: FETCH_USER_TOURNAMENTS,
		payload: userData
	})
}

export const successUserTournaments = ({ data }) => {
	return ({
		type: SUCCESS_USER_TOURNAMENTS,
		payload: data
	})
}

export const errorUserTournaments = ({ data }) => {
	return ({
		type: ERROR_USER_TOURNAMENTS,
		payload: data
	})
}