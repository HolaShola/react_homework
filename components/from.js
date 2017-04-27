import React from 'react';

export default class ConvertFrom extends React.Component{
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        let obj = this.refs;
        for(let a in obj) {
            if(obj[a].value == e.target.value) {
                obj[a].checked = true;
            } else {
                obj[a].checked = false;
            }
        }
        this.props.chooseValue('CONVERT_FROM', e.target.value);
    }
    render(){
        return (
        <div>
            <form>
                <label>
                    <input type="radio"
                        defaultValue={this.props.arr_of_val[0]}
                        onChange={this.onChange}
                        ref="first_radio"
                    />
                    {this.props.arr_of_val[0]}
                </label>
                <label>
                    <input type="radio"
                        defaultValue={this.props.arr_of_val[1]}
                        onChange={this.onChange}
                        ref="second_radio"
                    />
                    {this.props.arr_of_val[1]}
                </label>
                <label>
                    <input type="radio"
                        defaultValue={this.props.arr_of_val[2]}
                        onChange={this.onChange}
                         ref="third_radio"
                    />
                    {this.props.arr_of_val[2]}
                </label>
            </form>
        </div>
        );
    }
}