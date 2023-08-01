import React from 'react'

export const New = () => {
  return (
    
    <section id="services" class="about1">
        <header class="section-header" id="about1h">
        <h3>Our Services</h3>
        </header>
    <div class="row g-4 g-lg-5"  >

          <div class="col-lg-5">
            <div class="about1-img">
              <img src="assets/img/about.jpg" class="img-fluid" alt="" />
            </div>
          </div>

          <div class="col-lg-7">
           
          <h4 class="pt-0 pt-lg-5">Neque officiis dolore maiores et exercitationem quae est   </h4>

           
            <ul class="nav nav-pills mb-3 mt-5">
              <li><a class="nav-link active" data-bs-toggle="pill" href="#tab1">Fund Based</a></li>
              <li><a class="nav-link" data-bs-toggle="pill" href="#tab2">Non-Fund Based</a></li>
             
            </ul>

            <div class="tab-content">

              <div class="tab-pane fade show active" id="tab1">

                

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Working Capital Limit</h4>
                </div>
              

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Overdraft Limit</h4>
                </div>
                

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Term Loan</h4>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Project Finance (Set-up and Expansion)</h4>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Real Estate Funding</h4>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Funding in NPA Account</h4>
                </div>
              
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Construction Loan</h4>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Machinery Loan</h4>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>MSME Loans</h4>
                </div>

              </div>

              <div class="tab-pane fade show" id="tab2">

                

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Bank Guarantee</h4>
                </div>
               

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Letter of Credit Limit</h4>
                </div>
                

                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-check2"></i>
                  <h4>Standby Letter of Credit</h4>
                </div>
           
              </div>

              

            </div>

          </div>

        </div>
        </section>
  )
}
