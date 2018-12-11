import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
 
const Header = props => (
    <header className="black mb-5 pt-5">
        <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Miriade </h1>
        <ul className="list flex justify-center pl0">
            <li className="mh2"> 
                <NavLink exact to="/" className="nav-link link biryani-black f6 ttu gray"> What's Hot </NavLink> 
            </li>
            <li className="mh2"> 
                <NavLink to="/archive" className="nav-link link biryani-black f6 ttu gray"> Archive </NavLink> 
            </li>
            <li className="mh2"> 
            <NavLink to="/about" className="nav-link link biryani-black f6 ttu gray"> About </NavLink> 
            </li>
        </ul>
    </header>
)

export default Header