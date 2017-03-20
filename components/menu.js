import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component{
    render(){
/*
        var routes = (
            <div>
                <h1>My menu</h1>
                <ul>
                    <li><Link to={'/main'}>main </Link></li>
                    <li><Link to={'/about'}>about </Link></li>
                    <li><Link to={'/comp3'}>Comp 3</Link></li>
                </ul>
            </div>
        );

        return (
            <div>
                {this.props.children
                    ? this.props.children
                    : routes}
            </div>
        );
    */
        return (
            <div>
                 <h1>My menu</h1>
                 <div className='menu'>
                     <ul>
                          <li><Link to={'/conv1'}>Mass</Link></li>
                          <li><Link to={'/conv2'}>Distance</Link></li>
                          <li><Link to={'/conv3'}>Currencie</Link></li>
                     </ul>
                 </div>
                 {this.props.children}
            </div>
        );
    }
}