import React, { useState, useEffect } from "react";
import logo1 from "https://www.shutterstock.com/image-illustration/geometry-illustration-virtual-space-artistic-600w-1351837409.jpg"
import logo2 from "https://www.shutterstock.com/image-illustration/abstract-blue-background-holidays-lights-600w-1184456710.jpg";
import "./Navbar.css"

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <nav className={scroll ? "navbar scrolled" : "navbar"}>
      <div className="logo-container">
        <img src={scroll ? logo2 : logo1} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
