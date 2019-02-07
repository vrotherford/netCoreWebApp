import {requestTournamentsType, receiveTournamentsType} from './TournamentsConstants';

export const actionCreators = {
    requestTournaments: () => async (dispatch) => {

        dispatch({ type: requestTournamentsType, isLoading: true });

        const url = `api/GetTournaments`;
        const response = await fetch(url);
        const tournaments = await response.json();
        dispatch({ type: receiveTournamentsType, tournaments, isLoading: false });
    }
};
