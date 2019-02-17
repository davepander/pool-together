import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	currentPot: null,
    timeStopSplash: null,
    timeStopSave: null,
    timeStopPayout: null,
	loading: true,
	error: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
    	case actionTypes.FETCH_TIME_STOP_SPLASH_SUCCESS:
			return updateObject(state, {
				timeStopSplash: action.timeStopSplash,
				error: false,
				loading: false
            });
        case actionTypes.FETCH_TIME_STOP_SPLASH_FAILED:
			return updateObject(state, {
				error: action.error,
				loading: false
            });
        case actionTypes.FETCH_CURRENT_POT_SUCCESS:
			return updateObject(state, {
				currentPot: action.currentPot,
				error: false,
				loading: false
            });
        case actionTypes.FETCH_CURRENT_POT_FAILED:
			return updateObject(state, {
				error: action.error,
				loading: false
			});

		default:
			return state;
	}
}

export default reducer;