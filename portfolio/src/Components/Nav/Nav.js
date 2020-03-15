import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <nav>
        <ul id="nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/accomplishments">accomplishments</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
        </nav>
    )
}

export default Nav;