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
            case "Cm": {
                firstValue = this.props.one / 10;
                firstUnit = "Dm";
                secondValue = this.props.one / 100;
                secondUnit = "M";
            }
                break;
            case "Dm": {
                firstValue = this.props.one * 10;
                firstUnit = "Cm";
                secondValue = this.props.one / 10;
                secondUnit = "M";
            }
                break;
            case "M": {
                firstValue = this.props.one * 100;
                firstUnit = "Cm";
                secondValue = this.props.one * 10;
                secondUnit = "Dm";
            }
                break;
        }
        let rez1 = this.props.one && this.props.two
                    ? this.props.one + " " + this.props.two + " = " + firstValue + " " + firstUnit
                    : "";

        let rez2 = this.props.one && this.props.two
                    ? this.props.one + " " + this.props.two + " = " + secondValue + " " + secondUnit
                    : "";
        return (
            <div className="result">
                <h3>{rez1}</h3>
                <h3>{rez2}</h3>
            </div>
        );
    }
}