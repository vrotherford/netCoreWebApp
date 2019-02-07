import { SendRequestType, LoginSuccesType, LoginErrorType } from '../Login/LoginConstants'

const InitialState = {
    succes: false,
    authData: {}
};

export const reducer = (state, action) => {
    state = state || InitialState;
    if (action.type == SendRequestType) {
        return {
            ...state,
            authData: action.authData,
            succes: false
        }
    }
    if (action.type == LoginSuccesType) {
        return {
            ...state,
            authData: action.data,
            succes: true
        }
    }
    if (action.type == LoginErrorType) {
        return {
            ...state,
            succes: false
        }
    }
    return state;
};