import React from 'react';
 import Converter from '../converters/converter';

 export default class Converter_2 extends React.Component{
     render(){
         return (
             <div className='converter_2'>
                 <h3>Distance converter</h3>
                 <Converter valueTo={20} />
             </div>
         );
     }
 }