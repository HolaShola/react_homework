import React from 'react';
import InputTwoValue from '../converters/inputTwoValue';

export default class Converter_3 extends React.Component{
    render(){
        return (
            <div className='converter'>
                <h3>Currencie converter</h3>
                <InputTwoValue />
            </div>
        );
    }
}