import React from 'react';
import InputValue from '../converters/inputValue';
import ChooseMe from './chooseMe';

export default class Converter_1 extends React.Component{
    render(){
        return (
            <div className='converter_1'>
                <h3>Mass converter</h3>
                <ChooseMe value={["g", "Kg", "T"]}/>
           </div>
        );
    }
}