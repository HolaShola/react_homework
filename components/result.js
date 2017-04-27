import React from 'react';

export default class Result extends React.Component{
    render(){
        let rez;
        let num = this.props.num;
        let from = this.props.from;
        let to = this.props.to;
        if (this.props.converterName === "Mass") {
            switch (from) {
                case "g": {
                    if (to === "Kg") {
                        rez = num / 1000;
                    } else if (to === "T") {
                        rez = num / 1000000;
                    } else if (to === "g") {
                        rez = num;
                    }
                }
                    break;
                case "Kg": {
                    if (to === "g") {
                        rez = num * 1000;
                    } else if (to === "T") {
                        rez = num / 1000;
                    } else if (to === "Kg") {
                        rez = num;
                    }
                }
                    break;
                case "T": {
                    if (to === "g") {
                        rez = num * 1000000;
                    } else if (to === "Kg") {
                        rez = num * 1000;
                    } else if (to === "T") {
                        rez = num;
                    }
                }
                    break;
            }
        } else if (this.props.converterName === "Distance") {
            switch (from) {
                case "Cm": {
                    if (to === "Dm") {
                        rez = num / 10;
                    } else if (to === "M") {
                        rez = num / 100;
                    } else if (to === "Cm") {
                        rez = num;
                    }
                }
                    break;
                case "Dm": {
                    if (to === "Cm") {
                        rez = num * 10;
                    } else if (to === "M") {
                        rez = num / 10;
                    } else if (to === "Dm") {
                        rez = num;
                    }
                }
                    break;
                case "M": {
                    if (to === "Cm") {
                        rez = num * 100;
                    } else if (to === "Dm") {
                        rez = num * 10;
                    } else if (to === "M") {
                        rez = num;
                    }
                }
                    break;
            }
        }
        let result = num && from && to
                    ? num + " " + from + " = " + rez + " " + to
                    : "";
        return (
            <div className="result">
                <h3>{result}</h3>
            </div>
        );
    }
}