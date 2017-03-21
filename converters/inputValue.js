import React from 'react';
import ChooseMe from '../components/chooseMe';
import Result from '../components/result';


export default class InputValue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
         this.setState({value: e.target.value});
    }
    handleSubmit(e) {
        console.log("Value: " + this.state.value + " " + this.props.chooseValue);
        e.preventDefault();
    }
    render(){
        return (
            <div>
                <div className='InputValue'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            value:
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                        <input type="submit" value="result" />
                    </form>
                </div>
                <Result one={this.state.value} two={this.props.chooseValue}/>
            </div>
        );
    }
}