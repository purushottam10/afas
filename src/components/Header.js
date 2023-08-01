import React, { useState, useEffect } from 'react';

import logo from "./logo.jpg"

export default function Header11() {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBg);
  return (
    <React.Fragment>
      <div class="cont">
        <nav id="navbar" class={navbar ? 'navbar active1' : 'navbar'}>
          <header id="header" class="fixed-top d-flex align-items-center header-lightgrey">
            <div class="container-fluid">

              <div class="row justify-content-center align-items-center">
                <div class="col-xl-11 d-flex align-items-center justify-content-between">

                  <a href="index.html" class="logo"><img src={logo} alt="" class="img-fluid" /></a>



                  <div id="navbarNav">

                    <ul >
                      <li><a class="nav-link scrollto active" href="#">Home</a></li>
                      <li><a class="nav-link scrollto" href="#about">About Us</a></li>
                      <li><a class="nav-link scrollto" href="#services">Services</a></li>
                      <li><a class="nav-link scrollto " href="#facts">Core Values</a></li>


                      <li><a class="nav-link scrollto" href="#contact">Contact Us</a></li>

                    </ul>
                  </div>

                </div>
              </div>


            </div>
          </header>
        </nav>


      



      </div>

    </React.Fragment >
  )
}
