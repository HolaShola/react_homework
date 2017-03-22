import React from 'react';
import ChooseMe from '../components/chooseMe';
import Result from '../components/result';

export default class InputValue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
         this.setState({value: e.target.value});
    }
    render(){
        return (
            <div className='InputValue'>
                <form>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
                <Result one={this.state.value}
                        two={this.props.chooseValue}
                />
            </div>
        );
    }
}