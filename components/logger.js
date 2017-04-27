import React from 'react';
import { connect } from 'react-redux';
import styles from '../style/logger.css';
import randomColor from '../randomColor';

export class Logger extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='app'>
                {this.props.converters.map(function(obj, index) {
                    return <p key={index} style={{backgroundColor: randomColor()}}>
                               {obj.time} : from {obj.num} {obj.from} - to {obj.to}
                           </p>
                })}
            </div>
        );
    }
}

export default connect(
    state => ({
        converters: state.converters
    })
)(Logger);