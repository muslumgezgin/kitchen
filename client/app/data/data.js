/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-empty */
import config from '../actions/config';

function login(data) {
    return fetch(`${config.fetchLinkUrl}login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)

    }).then(res => {
        if (res.status === 403) {
            return { isError: true, shouldLogin: true };
        }

        return res.json();
    }).then((res) => {
        if (res.error) {
            return Promise.reject(res.error);
        }
        return res;
    });
}
function createUser(data) {
    return fetch(`${config.fetchLinkUrl}register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)

    }).then(res => {
        if (res.status === 403) {
            return { isError: true, shouldLogin: true };
        }
        return res.json();
    }).then((res) => {
        if (res.error) {
            return Promise.reject(res.error);
        }
        return res;
    });
}

function createOrderFromWidget(data) {
    return fetch(`${config.fetchLinkUrl}widget/offer`).then(res => {
        if (res.status === 403) {
            return { isError: true, shouldLogin: true };
        }
        return res.json();
    }).then((res) => {
        if (res.error) {
            return Promise.reject(res.error);
        }
        return res;
    });
}

export {
    login,
    createUser,
    createOrderFromWidget
};