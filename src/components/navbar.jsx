import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/invited'>Invited Speakers</NavLink>
    </div>
);
 
export default Navbar;