import { useState, useEffect } from 'react';
import "./Anii.css"
function NumberSection({ number }) {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedNumber(animatedNumber + 1);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [animatedNumber]);

  return (
    <div className="number-section">
      {animatedNumber.toLocaleString()}
    </div>
  );
}
export default NumberSection;