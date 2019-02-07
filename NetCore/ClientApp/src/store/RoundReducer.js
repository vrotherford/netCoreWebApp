import AuthHelper from '../utils/AuthHelper'

const requestTasksType = 'REQUEST_ROUND_TASKS';
const receiveTasksType = 'RECEIVE_ROUND_TASKS';
const initialState = { tasks: [], currentPage: 1 };

export const actionCreators = {
    requestRoundTasks: (roundID, currentPage) => async (dispatch, getState) => {
        
        dispatch({ type: requestTasksType, roundID, currentPage });
        let token = AuthHelper.getToken();
        const url = `api/GetRoundTasks?roundID=${roundID}`;
        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const tasks = await result.json().catch(err => console.log("err"));

        dispatch({ type: receiveTasksType, roundID, currentPage, tasks })
    }
}

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestTasksType) {
        return {
            ...state,
            roundID: action.roundID,
            currentPage: action.currentPage
        };
    }

    if (action.type === receiveTasksType) {
        return {
            ...state,
            roundID: action.roundID,
            currentPage: action.currentPage,
            tasks: action.tasks
        };
    }

    return state;
};