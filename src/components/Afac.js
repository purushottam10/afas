import React,{useEffect} from 'react'
import Aos from 'aos';

import 'aos/dist/aos.css'
const Afac = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 })
}, []);
  return (
    <React.Fragment>
      <div class="newafas">
      <main id="main">





        <section id="about">
          <div class="container" >

            <header class="section-header">
              <h3>How AFAS Can Help You Grow</h3>
              <p>“You dream, we make it your reality”</p>
            </header>
            <section id="services" class="services">
              <div class="container">
                <div class="row" >
                  <div class="col-lg-12 d-flex align-items-center justify-content-center" data-aos="flip-up">
                    <div class="speciallogo1">   <img src="assets/img/performance.jpg"></img>
                      <h4><a href="">Unique and ideal solutions that suit all your needs.</a></h4>
                    </div>

                  </div>

                  <div class="col-lg-12  d-flex align-items-center justify-content-center" data-aos="zoom-in" >
                    <div class="speciallogo1">   <img src="assets/img/support.jpg"></img>
                      <h4><a href="">Get the bank that provides you with the best loan offers.</a></h4>

                    </div>
                  </div>

                  <div class="col-lg-12  d-flex align-items-center justify-content-center"  data-aos="flip-down">
                    <div class="speciallogo1">  <img src="assets/img/partnership.jpg"></img>
                      <h4><a href="">Ease your journey by letting us handle all loan formalities, complications and queries.</a></h4>
                    </div>

                  </div>

                  <div class="col-lg-12 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                    <div class="speciallogo1">  <img src="assets/img/subscription.jpg"></img>
                      <h4><a href="">Our experts guide you through every step of your financial growth.</a></h4>

                    </div>
                  </div>



                </div>


              </div>
            </section>
          </div>


        </section>
        
      </main>
      </div>
    </React.Fragment >
  )
}

export default Afac;
