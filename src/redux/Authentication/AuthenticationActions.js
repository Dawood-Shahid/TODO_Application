// file where action are define

import {
    USER_SIGN_IN,
    USER_SIGN_UP
} from './AuthenticationType';
import config from '../../DBConfig/Config'

export const userSignIn = (payload) => {
    
    return {
        type: USER_SIGN_IN,
        payload
    };
};

export const userSignUp = (payload) => {
    // const key = config.database().ref('todo-app').push().key;
    // console.log(key);
    return {
        type: USER_SIGN_UP,
        payload
    };
};