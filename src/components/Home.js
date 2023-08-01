import React from 'react';



export default function Home() {
  return (
    <React.Fragment>
      <div class="cont">
        <header id="header" class="fixed-top d-flex align-items-center header-lightgrey">
          <div class="container-fluid">

            <div class="row justify-content-center align-items-center">
              <div class="col-xl-11 d-flex align-items-center justify-content-between">

                <a href="index.html" class="logo"><img src="assets/img/logo-03.jpg" alt="" class="img-fluid" /></a>

                <nav id="navbar" class="navbar ">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                  </button>
                  <div id="navbarNav">

                    <ul >
                      <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                      <li><a class="nav-link scrollto" href="#about">About Us</a></li>
                      <li><a class="nav-link scrollto" href="#services">Services</a></li>
                      <li><a class="nav-link scrollto " href="#skills">Skills</a></li>


                      <li><a class="nav-link scrollto" href="#contact">Contact Us</a></li>
                    </ul>
                  </div>
                  <i class="bi bi-list mobile-nav-toggle" id="navbarNav"></i>
                </nav>
              </div>
            </div>

            <div class="main">
              <img src="assets/img/logo-03.jpg" alt="not"></img>
              <h1>Ananya financial And Advisory Limited</h1>
            </div>
          </div>
        </header>





        <section id="intro">
          <div class="intro-container">
            <div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">

              <ol class="carousel-indicators"></ol>

              <div class="carousel-inner" role="listbox">

                <div class="carousel-item active">
                  <div class="carousel-background"><img src="img/intro-carousel/1.jpg" alt="" /></div>
                  <div class="carousel-container">
                    <div class="carousel-content">
                      <h2>We are professional</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
          </section>
          </div>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </React.Fragment >
        )
}
