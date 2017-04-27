import React from 'react';
import Converter from './converter';

export default class Converter_1 extends React.Component {
    render() {
        return (
            <Converter
                converterName={"Mass"}
                arr_of_val={["g", "Kg", "T"]}
            />
        );
    }
}