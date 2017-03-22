import React from 'react';
import ChooseMe from '../components/chooseMe';
import Result from '../components/result';

export default class InputTwoValue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value1: "", value2: ""};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    handleChange1(e) {
         this.setState({value1: e.target.value});
    }
    handleChange2(e) {
         this.setState({value2: e.target.value});
    }
    render(){
        let res = this.state.value1 && this.state.value2
                ? this.state.value1 * this.state.value2
                : "";
        return (
            <div className='InputTwoValue'>
                <form>
                    <input
                        type="text"
                        value={this.state.value1}
                        onChange={this.handleChange1}
                        placeholder="rate"
                    />
                    <input
                        type="text"
                        value={this.state.value2}
                        onChange={this.handleChange2}
                        placeholder="number"
                    />
                </form>
                <h4>{res}</h4>
            </div>
        );
    }
}