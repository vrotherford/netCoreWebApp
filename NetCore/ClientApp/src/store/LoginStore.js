import AuthHelper from "../utils/AuthHelper"

const SendRequestType = "SEND_REQUEST";
const LoginSuccesType = "LOGIN_SUCCES";
const LoginErrorType = "LOGIN_ERROR";
const InitialState = {
    succes: false,
    authData: {} };

export const actionCreators = {
    sendRequest: (authData) => async (dispatch) => {
        dispatch({ type: SendRequestType, authData });
        const url = 'api/auth/login';
        let bodydata;
        try {
            bodydata = JSON.stringify({
                Login: authData.Login,
                Password: authData.Password
            });
        }
        catch (error) {
            console.log(error);
        }
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodydata
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                dispatch({ type: LoginErrorType });
                throw "autorization error";
            }
        }).then((data) => {
            AuthHelper.saveAuth(data.token, data.tokenExpirationTime, data.userId);
            dispatch({ type: LoginSuccesType, authData: data });
        });
    }
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