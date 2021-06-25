import { combineReducers } from 'redux';
import AuthenticationReducer from './Authentication/AuthenticationReducer';

const rootReducer = combineReducers({
    authentication: AuthenticationReducer
});

export default rootReducer;