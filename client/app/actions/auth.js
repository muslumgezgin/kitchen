/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
/* eslint-disable no-undef */

import * as actionTypes from './authType';
import config from './config';

export const authFail = error => ({
    type: actionTypes.AUTH_FAIL,
    error
});

export const authStart = () => ({
    type: actionTypes.AUTH_START
});

export const authLogin = (username, password) => dispatch => {
    dispatch(authStart());
    axios
        .post(config.navLink.url + 'auth/signin', {
            username,
            password
        })
        .then(res => {
            console.log(res);
            /*  const user = {
                 token: res.data.key,
                 username,
                 userId: res.data.user,
                 is_student: res.data.user_type.is_student,
                 is_teacher: res.data.user_type.is_teacher,
                 expirationDate: new Date(new Date().getTime() + 3600 * 1000)
             };
             localStorage.setItem('user', JSON.stringify(user));
             dispatch(authSuccess(user));
             dispatch(checkAuthTimeout(3600)); */
        })
        .catch(err => {
            dispatch(authFail(err));
        });
};
