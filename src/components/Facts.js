import React, { useState } from 'react'

const Facts = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEmi = () => {
    const P = loanAmount;
    const R = interestRate / 1200; // convert interest rate to monthly rate
    const N = loanDuration * 12; // convert loan duration to months
    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(EMI);
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleLoanDurationChange = (event) => {
    setLoanDuration(event.target.value);
  };


  return (
    <React.Fragment>
      <>
      <section id="emi">
      <div class="emi">
        
      <div class="container py-7">
        <div class="row mt-3">
          <div class="col-sm-4 col-6 mx-auto">
          <div class="container">
        <div class="row">
          <i class="bi bi-briefcase"></i>
          <h4 class="title">
            <button  id="mybutton myModal1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            EMI Calculator
            </button>
            </h4>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          
            </div>
</div>
</div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
           
                      <p class="heading">EMI Calculator</p>
                      <div class="input-container">
                        <label for="amount">Loan Amount(₹)</label>
                        <input type="text" id="loan-amount" value={loanAmount} onChange={handleLoanAmountChange} />
                      </div>
                      <div class="input-container">
                        <label for="interest">Interest Rate(%)</label>
                        <input type="text" id="interest-rate" value={interestRate} onChange={handleInterestRateChange} />
                      </div>
                      <div class="input-container loan-tenure-container">
                        <label for="loanTenure">Loan Tenure</label>
                        <input type="number" id="loan-duration" value={loanDuration} onChange={handleLoanDurationChange} />
                      </div>
                  
                  <div class="submit-container">
                    <button onClick={calculateEmi}>Calculate EMI</button>
                  </div>

                  <div class="output">
                    <p >EMI: {emi.toFixed(2)}</p>

                  </div>
   
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn bg-gradient-dark" data-bs-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div >
      </section>
      </>

    </React.Fragment >
  )
}

export default Facts;

