import React from 'react';
import styles from '../style/inputValue.css';

export default class InputValue extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange() {
        this.props.chooseValue('SET_NUM', this.inputValue.value);
    }
    render(){
        return (
            <div className='app'>
                <form>
                    <input
                        type="text"
                        ref={(input) => this.inputValue = input}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        );
    }
}