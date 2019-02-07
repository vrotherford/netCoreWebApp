import AuthHelper from '../../utils/AuthHelper';
import { requestTasksType, receiveTasksType } from './RoundConstants';

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