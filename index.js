import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Menu from './components/menu';

class App extends React.Component {
    render() {
        return (
                <div>
                    <Routes />
                </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));