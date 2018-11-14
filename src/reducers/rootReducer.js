
import createUserReducer from './testReducer';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// @ROOT REDUCER
const rootReducer = combineReducers({
    createUserReducer,
    form: formReducer
});

const reducer = combineReducers(rootReducer);
const store = createStore(reducer);
export default rootReducer;