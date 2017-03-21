import React from 'react';

export default class Result extends React.Component{
    render(){
        let firstValue = "";
        let secondValue = "";
        let firstUnit = "";
        let secondUnit = "";
        switch (this.props.two) {
            case "g": {
                firstValue = this.props.one / 1000;
                firstUnit = "Kg";
                secondValue = this.props.one / 1000000;
                secondUnit = "T";
            }
                break;
            case "Kg": {
                firstValue = this.props.one * 1000;
                firstUnit = "g";
                secondValue = this.props.one / 1000;
                secondUnit = "T";
            }
                break;
            case "T": {
                firstValue = this.props.one * 1000000;
                firstUnit = "g";
                secondValue = this.props.one * 1000;
                secondUnit = "Kg";
            }
                break;
        }
        return (
            <div className="result">
                <h3>{firstValue + " " + firstUnit}</h3>
                <h3>{secondValue + " " + secondUnit}</h3>
            </div>
        );
    }
}