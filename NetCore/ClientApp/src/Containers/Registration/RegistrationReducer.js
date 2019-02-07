import { SendRequestType, ReciveDataType } from '../Registration/RegistrationContants';

const InitialState = { authData: [] };

export const reducer = (state, action) => {
    state = state || InitialState;
    if (action.type == SendRequestType) {
        return {
            ...state,
            authData: action.authData
        }
    }
    return state;
}