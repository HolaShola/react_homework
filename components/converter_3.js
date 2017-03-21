import React from 'react';
import InputValue from '../converters/inputValue';

 export default class Converter_3 extends React.Component{
     render(){
         return (
             <div className='converter_3'>
                 <h3>Currencie converter</h3>
                 <InputValue valueTo={1000} />
             </div>
         );
     }
 }