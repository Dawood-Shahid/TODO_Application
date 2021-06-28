//  reducers produce the state of your application.

import {
    ADD_TODO_ITEM,
    SET_TODO_ITEMS
} from './todoType';

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_ITEMS:
            {
                return {
                    ...state,
                    todos: action.payload
                };
            };

        default:
            return {
                ...state
            };
    };
};