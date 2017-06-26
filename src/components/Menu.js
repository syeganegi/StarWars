import React from 'react';
import { Link, IndexLink } from 'react-router';

const Menu = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Star Wars</a>
            </div>
            <ul className="nav navbar-nav">
                <li><IndexLink to="/">Characters</IndexLink></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </nav>);

export default Menu;