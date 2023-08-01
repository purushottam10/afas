import React from 'react';

import Image from './Image';
import { Title } from './Title';
import { Try } from './Try';
import logo from "./logo.jpg"

function Home1() {
  return (
    <div className="animated-number-section">
      <div className="image">
        <img alt="placeholder" src={logo} />
      </div>
      <div class="newtry">
        <div class="try2">
          <div className='trydiv'>
            <h5>Unsecured CC Limit upto 5cr</h5>
          </div>
          <div className='trydiv'><h5>Get 150% Limit Value of Collateral Value</h5></div><div className='trydiv'><h5>BG & LC at 40% collateral margin</h5></div>
          <div className='trydiv'><h5>Get funds for new project without cash flow</h5></div>
        </div>
      </div>

    </div>
  );
}

export default Home1;
