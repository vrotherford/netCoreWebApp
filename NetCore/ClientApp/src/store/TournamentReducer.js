const requestTournamentsType = 'REQUEST_TOURNAMENTS_FORECASTS';
const receiveTournamentsType = 'RECEIVE_TOURNAMENTS_FORECASTS';
const initialState = { tournaments: [], isLoading: false };

export const actionCreators = {
    requestTournaments: () => async (dispatch) => {

        dispatch({ type: requestTournamentsType, isLoading: true });

        const url = `api/GetTournaments`;
        const response = await fetch(url);
        const tournaments = await response.json();
        dispatch({ type: receiveTournamentsType, tournaments, isLoading: false });
    }
};

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