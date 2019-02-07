import { requestTasksType, receiveTasksType } from './RoundConstants';

const initialState = { tasks: [], currentPage: 1 };

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