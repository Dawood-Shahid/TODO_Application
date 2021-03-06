//  reducers produce the state of your application.

import {
    ADD_TODO_ITEM,
    SET_TODO_ITEMS,
    UPDATE_TODO_ITEM,
    SET_EDIT_FALG,
    RESET_EDIT_FALG,
    SET_DELETE_FALG,
    RESET_DELETE_FALG,
    SET_FILTER_FALG,
    RESET_FILTER_FALG,
    DELETE_TODO_ITEM,
    SET_FILTER_FALG_VALUE,
    SET_DELETE_FALG_VALUE,
} from './todoType';

const initialState = {
    todos: [],
    filteredTodos: [],
    editFlag: false,
    editTodo: {},
    filterFlag: false,
    deleteFlag: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_ITEMS:
            return {
                ...state,
                todos: action.payload
            };
            break;

        case ADD_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
            break;
        
        case SET_EDIT_FALG:
            return {
                ...state,
                editFlag: true,
                editTodo: action.payload
            };
            break;

        case DELETE_TODO_ITEM:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.key !== action.payload)
            };
            break;
        
        case UPDATE_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos.map((todo) => todo.key === action.payload.key ? action.payload : todo)]
            };
            break;

        case RESET_EDIT_FALG:
            return {
                ...state,
                editFlag: false,
                editTodo: {}
            };
            break;
        
        case SET_DELETE_FALG:
            return {
                ...state,
                deleteFlag: true
            };
            break;

        case SET_DELETE_FALG_VALUE:
            return {
                ...state,
                todos: action.payload === 'all' ? [] : state.todos.filter(todo => todo.isComplete !== action.payload)
            };
            break;

        case RESET_DELETE_FALG:
            return {
                ...state,
                deleteFlag: false,
            };
            break;

        case SET_FILTER_FALG:
            return {
                ...state,
                filterFlag: true
            };
            break;

        case SET_FILTER_FALG_VALUE:
            return {
                ...state,
                filteredTodos: state.todos.filter(todo => action.payload === 'all' ? true : todo.isComplete === action.payload)
            };
            break;

        case RESET_FILTER_FALG:
            return {
                ...state,
                filterFlag: false,
            };
            break;
        
        default:
            return {
                ...state
            };
    };
};