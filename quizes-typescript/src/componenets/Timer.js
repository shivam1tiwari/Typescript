import { useState, useEffect } from "react";
/**
* Timer component - Show the remaining time  time
* @param {interval, handleInterval } props
*/
const Timer = ({ interval, handleInterval }) => {
  const [remainingTime, setRemainingTime] = useState(60);
// Side effect after 10 sec and cleaned up
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleInterval();
    }, 60000);

    return () => {
      clearTimeout(timeout);
    };
  }, [interval,handleInterval]);
// Time interval 
  useEffect(() => {
    const timeId = setInterval(() => {
      setRemainingTime((prev) => {
        let newTime = prev;
        newTime -= 0.5;
        return newTime;
      });
    }, 500);
   
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return <p> 00: {Math.floor(remainingTime).toString().padStart(2, "0")}</p>;
};

export default Timer;
