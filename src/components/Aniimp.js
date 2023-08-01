import NumberSection from "./Anii";
import "./Aniimp.css"
import CountUp from 'react-countup';
function AnimatedNumberSections1() {
    return (
      <div className="animated-number-sections">
       <div className="animated-number">
            <div className='childanimation'>
                <CountUp start={0} end={250} duration={5} />+
                <div className='animatedtext'>
                    Happy Clients
                </div>
            </div>
            <div className='childanimation'>
                <CountUp start={0} end={20} duration={5} />+
                <div className='animatedtext'>
                    Banks & NBFC
                </div>
            </div>
            <div className='childanimation'>
                <CountUp start={0} end={400} duration={5} />+
                <div className='animatedtext'>
                    Successful Transactions
                </div>
            </div>
            <div className='childanimation'>
                <CountUp start={0} end={100} duration={5} />+
                <div className='animatedtext'>
                    Cr+Disbursed
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default AnimatedNumberSections1;