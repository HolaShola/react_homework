import React from 'react';

export default class Converter extends React.Component{
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
        e.preventDefault();
        console.log("Value: " + this.state.value);
    }
    render(){
        return (
            <div className='converter'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="result" />
                </form>
                <h3>
                    {this.state.value
                        ? this.state.value * this.props.valueTo
                        : this.state.value
                    }
                </h3>
            </div>
        );
    }
}