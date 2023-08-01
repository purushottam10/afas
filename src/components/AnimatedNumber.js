import React from 'react';
import CountUp from 'react-countup';

function AnimatedNumber() {
    return (
        <div className="animated-number">
            <div className='childanimation'>
                <CountUp start={0} end={100} duration={5} />+
                <div className='animatedtext'>
                    Happy Clients
                </div>
            </div>
            <div className='childanimation'>
                <CountUp start={0} end={80} duration={5} />+
                <div className='animatedtext'>
                   Banks & NBFC
                </div>
            </div>
            <div className='childanimation'>
                <CountUp start={0} end={80} duration={5} />+
                <div className='animatedtext'>
                    Happy Contributors
                </div>
            </div>
            
        </div>

    );
}

export default AnimatedNumber;
