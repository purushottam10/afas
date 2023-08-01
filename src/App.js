
import './App.css';


import Facts from "./components/Facts";
import About from "./components/About";
import {Services }from "./components/Services";
import Afac from "./components/Afac";
import Expertise from "./components/Expertise";
import Home1 from './components/Home1';
import Footer from './components/Footer';



import AnimatedNumberSections1 from './components/Aniimp';

import Client from './components/Banking';
import CarouselFadeExample from './components/Sliders';
import Contact from './components/Contact';
import FrameComponent from './components/Sample';
import FrameComponent1 from './components/Newservices';
import FrameComponent21 from './components/NNavabr';
import {Route,Routes} from "react-router-dom"
import NewNavbar from './components/Newnavbar';
import { Newcmp } from './components/Newcmp';
import HomePage from './HomePage';

function App() {

  return (
    <div className="App">


<Newcmp/>
<Routes>
  <Route path="/services" element={<Services />}></Route>
  <Route path="/" element={<HomePage />}></Route>

</Routes>




    </div>
  );
}

export default App;
