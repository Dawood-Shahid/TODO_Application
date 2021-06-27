//  reducers produce the state of your application.

import {
    USER_SIGN_IN,
    USER_SIGN_UP,
} from './AuthenticationType';

const initialState = {
    isLogedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGN_IN:
            {return {
                ...state,
                isLogedIn: true
            }};
            
            case USER_SIGN_UP:
                return {
                    ...state,
                    user: action.payload
            };

        default:
            return {
                ...state
            };
    };
};