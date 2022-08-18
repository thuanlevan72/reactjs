import { useEffect, useState } from "react";

function CountDownApp() {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
        setCountDown((prevStates) => prevStates - 1);
      }, 1000);
  
      return () => clearInterval(timerId);
  }, []);
  return (
    <div>
      <h1> {countDown}</h1>
    </div>
  );
}

export default CountDownApp;
//
