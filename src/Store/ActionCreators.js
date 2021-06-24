// file where action are define

import {
    USER_SIGN_IN,
    USER_SIGN_UP
} from './ActionType';

export const userSignIn = (payload) => {
    return {
        type: USER_SIGN_IN,
        payload
    };
};

export const userSignUp = (payload) => {
    return {
        type: USER_SIGN_UP,
        payload
    };
};