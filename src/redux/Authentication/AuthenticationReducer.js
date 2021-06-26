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
            return {
                ...state,
                isLogedIn: true
            };
            
            case USER_SIGN_UP:
                return {
                    ...state,
                    user: {
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        email: action.payload.email
                    },
                    isLogedIn: false
            };

        default:
            return {
                state
            };
    };
};