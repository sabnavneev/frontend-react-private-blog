import React from 'react';

import { NavLink } from 'react-router-dom';

function NavMenu() {
    return (
        <nav>
            <div className="nav-container">
                <ul className="nav-ul">
                    <li>
                        <NavLink to="/" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogposts" activeClassName="active-link">Blogposts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavMenu;