import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication/AuthenticationReducer';

const rootReducer = combineReducers({
    auth: AuthenticationReducer
});

export default rootReducer;