import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Converter_1 from './components/converter_1';
import NotFound from './components/not_found';
import Converter_2 from './components/converter_2';
import Converter_3 from './components/converter_3';
import Welcome from './components/welcome';
import Menu from './components/menu';

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Menu}>
                    <IndexRoute component={Welcome} />
                    <Route path="/conv1" component={Converter_1} />
                    <Route path="/conv2" component={Converter_2} />
                    <Route path="/conv3" component={Converter_3} />
                    <Route path="*" component={NotFound} />
                </Route>
                <Route path="*" component={NotFound} />
            </Router>
        );
    }
}