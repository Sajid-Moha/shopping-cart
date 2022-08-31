import React from "react";
import myLogo from "../media/chef-logo.svg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header>
            <div className="branding">
                <img src={myLogo} alt="chef hat logo" className="logo"></img>
                <div class="brand-name">Fake Restaurant</div>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/store">Menu</Link>
                <Link to="/cart" className="cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
            </nav>
        </header>
    );
}

export default Header;