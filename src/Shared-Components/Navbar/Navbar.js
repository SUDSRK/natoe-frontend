// src/components/NavBar.js
import React from 'react';
import './navbar.scss'
const NavBar = () => {
    return (
        <div className="navbar">
            {/* Logo */}
            <div className="logo">
                <img src="MainLogo.png" alt="Logo" />
            </div>
            {/* Navigation links */}
            <ul className="nav-links">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </div>
    );
};

export default NavBar;
