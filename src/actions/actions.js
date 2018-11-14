import {
    SEND_FORM_DATA_SUCCESS,
    SEND_FORM_DATA_REJECTED,
    SEND_FORM_DATA_PENDING
} from '../ACTION_TYPES';

import axios from 'axios';

const apiUrl = 'http://localhost:8090';

export const createUser = (user) => {
    // console.log(user);
    const userMock = {
        name: 'name valera',
        job: 'my job is ebashit'
    };

    return (dispatch) => {
        dispatch({
            type: SEND_FORM_DATA_PENDING,
        });
       return axios.post(`${apiUrl}/badge`, {...userMock})
            .then(response => {
                dispatch({
                    type: SEND_FORM_DATA_SUCCESS,
                    payload: response.data
                });
            })
            .catch(error => {
                throw(error);
            });
    };
};

export default {
    createUser
}