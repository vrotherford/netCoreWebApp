import { requestTournamentsType, receiveTournamentsType } from './TournamentsConstants';

const initialState = { tournaments: [], isLoading: false };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestTournamentsType) {
        return {
            ...state,
            isLoading: action.isLoading
        };
    }

    if (action.type === receiveTournamentsType) {
        return {
            ...state,
            tournaments: action.tournaments,
            isLoading: action.isLoading
        };
    }

    return state;
};