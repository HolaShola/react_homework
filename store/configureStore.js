import reducer from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

export default function configureStore() {
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store
}