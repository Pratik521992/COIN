import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Countdown() {
  const [time, setTime] = useState(120);
  const { nextTick } = useSelector((state) => state.dashboard);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    setTime(120);
  }, [nextTick]);

  return (
    <p
      className="timeLeft"
      style={time > 60 ? { color: "green" } : { color: "orangered" }}
    >
      {time}
    </p>
  );
}

export default Countdown;
