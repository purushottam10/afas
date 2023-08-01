import React from 'react'
import { Services } from './Services'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


import About from "./About";


import AnimatedNumberSection from './Home1';


export const Newcmp = () => {
  return (
    <div>

      <div class="cmp">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li>
         <Link to="/services">Services</Link>
       
 
          </li>
          <li><a href="#emi">EMI Calculator</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>



    </div>
  )
}
