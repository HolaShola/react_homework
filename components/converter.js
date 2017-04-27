import React from 'react';
import InputValue from '../converters/inputValue';
import Result from './result';
import ConvertFrom from './from';
import ConvertTo from './to';
import Logger from './logger';
import { connect } from 'react-redux';

export class Converter extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange() {
        this.props.chooseValue('SET_LOG', !this.props.log);
    }
    render(){
        return (
            <div className='converter'>
                <h3>{this.props.converterName}  converter</h3>
                <InputValue
                    chooseValue={this.props.chooseValue}
                />
                <ConvertFrom
                    arr_of_val={this.props.arr_of_val}
                    chooseValue={this.props.chooseValue}
                    to={this.props.to}
                />
                <ConvertTo
                    arr_of_val={this.props.arr_of_val}
                    chooseValue={this.props.chooseValue}
                    from={this.props.from}
                />
                <Result
                    num={this.props.num}
                    from={this.props.from}
                    to={this.props.to}
                    converterName={this.props.converterName}
                />
                <form>
                    <label>
                        <input type="checkbox"
                            onChange={this.onChange}
                        />
                        Show logger
                    </label>
                </form>
                <div className={this.props.log === false ? "none" : "logger"}>
                    <Logger/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        log: state.log,
        num: state.converters[state.converters.length - 1].num,
        from: state.converters[state.converters.length - 1].from,
        to: state.converters[state.converters.length - 1].to
    }),
    dispatch => ({
        chooseValue: (a, value) => {
            dispatch({ type: a, payload: value });
        }
    })
)(Converter);