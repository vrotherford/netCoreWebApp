import AuthHelper from '../../utils/AuthHelper'
import { SendRequestType, LoginSuccesType, LoginErrorType } from '../Login/LoginConstants'

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