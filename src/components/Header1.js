import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import "./Header1.css";

function Header1() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Logo" />

                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <div className={click ? "menu-line line-1 active" : "menu-line line-1"}></div>
                    <div className={click ? "menu-line line-2 active" : "menu-line line-2"}></div>
                    <div className={click ? "menu-line line-3 active" : "menu-line line-3"}></div>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/services"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/products"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact-us"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>



    );
}

export default Header1;
