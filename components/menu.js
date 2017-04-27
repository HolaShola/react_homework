import React from 'react';
import { Link } from 'react-router';

export default function Menu(props) {
    return (
        <div>
            <h1>My menu</h1>
            <div className='menu'>
                <ul>
                    <li><Link to={'/conv1'}>Mass</Link></li>
                    <li><Link to={'/conv2'}>Distance</Link></li>
                    <li><Link to={'/conv3'}>Currencie</Link></li>
                    <li><Link to={'/log'}>Logger</Link></li>
                </ul>
            </div>
            {props.children}
        </div>
    );
}