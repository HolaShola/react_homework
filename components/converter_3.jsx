import React from 'react';
 import Converter from '../converters/converter';

 export default class Converter_3 extends React.Component{
     render(){
         return (
             <div className='converter_3'>
                 <h3>Currencie converter</h3>
                 <Converter valueTo={1000} />
             </div>
         );
     }
 }