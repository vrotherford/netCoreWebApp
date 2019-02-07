import AuthHelper from "../utils/AuthHelper"

const SendRequestType = "SEND_REQUEST";
const ReciveDataType = "RECIVE_DATA";
const InitialState = { authData: [] };

export const actionCreators = {
    sendRequest: (authData) => async (dispatch) => {
        dispatch({ type: SendRequestType, authData });
        const url = 'api/auth/register';
        let bodydata;
        try {
            bodydata = JSON.stringify({
                Login: authData.Login,
                FName: authData.FirstName,
                LName: authData.LastName,
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
                throw "autorization error"
            }
        }).then((data) => {
            AuthHelper.saveAuth(data.token, data.tokenExpirationTime, data.userId);
        });
        console.log(result);
    }
};

export const reducer = (state, action) => {
    state = state || InitialState;
    if (action.type == SendRequestType) {
        return {
            ...state,
            authData: action.authData
        }
    }
    return state;
};