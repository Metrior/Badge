import { combineReducers } from 'redux';
import createUserReducer from './testReducer';

// @ROOT REDUCER
const rootReducer = combineReducers({
    createUserReducer,
});

export default rootReducer;