import React from 'react';
import InputValue from '../converters/inputValue';

export default class ChooseMe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ""
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({selectedOption: e.target.value});
    }
    render(){
        return (
            <div>
                <form>
                    <div className="radio">
                        <label>
                            <input type="radio"
                                value={this.props.value[0]}
                                checked={this.state.selectedOption === this.props.value[0]}
                                onChange={this.onChange}
                            />
                            {this.props.value[0]}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio"
                                value={this.props.value[1]}
                                checked={this.state.selectedOption === this.props.value[1]}
                                onChange={this.onChange}
                            />
                            {this.props.value[1]}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio"
                                value={this.props.value[2]}
                                checked={this.state.selectedOption === this.props.value[2]}
                                onChange={this.onChange}
                            />
                            {this.props.value[2]}
                        </label>
                    </div>
                </form>
                <InputValue chooseValue={this.state.selectedOption} />
            </div>
        );
    }
}