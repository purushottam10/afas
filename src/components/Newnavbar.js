import React, { useState } from 'react';
import "./Header1.css"
import logo from "./logo.jpg"
import close from "./cancel.png"
const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo"><img src={logo}></img></div>
      {!isOpen && (
        <button className="menu-button" onClick={toggleNavbar}>
          Menu
        </button>
      )}
      {isOpen && (
        <div className="navbar-menu">
          <button className="close-button" onClick={toggleNavbar}>
        
      <div className="navbar-logo"><img src={close}></img></div>
    
          </button>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>EMI Calculator</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewNavbar;
