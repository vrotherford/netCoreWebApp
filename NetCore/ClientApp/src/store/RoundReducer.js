const requestTasksType = 'REQUEST_ROUND_TASKS';
const receiveTasksType = 'RECEIVE_ROUND_TASKS';
const initialState = { tasks: [], currentPage: 1 };

export const actionCreators = {
    requestRoundTasks: (roundID, currentPage) => async (dispatch, getState) => {
        
        dispatch({ type: requestTasksType, roundID, currentPage });

        const url = `api/GetRoundTasks?roundID=${roundID}`;
        const result = await fetch(url);
        const tasks = await result.json();

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