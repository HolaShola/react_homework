import React from 'react';
import InputValue from '../converters/inputValue';
import ChooseMe from './chooseMe';

export default class Converter_2 extends React.Component{
    render(){
        return (
            <div className='converter'>
                <h3>Distance converter</h3>
                <ChooseMe value={["Cm", "Dm", "M"]}/>
            </div>
        );
    }
}