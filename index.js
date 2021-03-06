import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.querySelector('#root')
);