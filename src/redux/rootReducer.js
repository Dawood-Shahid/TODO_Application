import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication/AuthenticationReducer';
import todoReducer from './todo/todoReducer';

const rootReducer = combineReducers({
    auth: AuthenticationReducer,
    todo: todoReducer,
    
});

export default rootReducer;