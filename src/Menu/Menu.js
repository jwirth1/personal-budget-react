import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
    return (
        <nav
            role="navigation"
            aria-label="Main menu"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            >
        
            <header className="menu">
                <ul>
                     <li><Link itemProp="url" to="/">Home</Link></li>
                     <li><Link itemProp="url" to="/about">About</Link></li>
                     <li><Link itemProp="url" to="/login">Login</Link></li>
                </ul>
            </header>
         </nav>
    )
}

export default Menu;