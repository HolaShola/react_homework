import React from 'react';
 import Converter from '../converters/converter';

 export default class Converter_1 extends React.Component{
     render(){
         return (
             <div className='converter_1'>
                 <h3>Mass converter</h3>
                 <Converter valueTo={10} />
             </div>
         );
     }
 }