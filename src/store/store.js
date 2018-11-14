import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

export default function configStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(logger, thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f,
        )
    );
    return  store;
}