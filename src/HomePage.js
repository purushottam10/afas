import React from 'react';
import Contact from './components/Contact';
import About from './components/About';
import AnimatedNumberSections1 from './components/Aniimp';
import FrameComponent from './components/Sample';
import Expertise from './components/Expertise';
import CarouselFadeExample from './components/Sliders';
import Facts from './components/Facts';
import Home1 from './components/Home1';
export default function HomePage() {
  return (
    <div>
        <Home1 />
         <AnimatedNumberSections1 />

          <About />

      <FrameComponent />
     <Expertise />

<CarouselFadeExample />
<Facts />
<Contact />
    </div>
  )
}
