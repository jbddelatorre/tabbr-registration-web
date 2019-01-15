export const LOADER = '[LOADER]';

export const SET_LOADER = `${LOADER} Set`;
export const REMOVE_LOADER = `${LOADER} Remove`;

export const setLoader = () => ({
	type: SET_LOADER,
})

export const removeLoader = () => ({
	type: REMOVE_LOADER,
})
