import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getComponentDetails } from "../../redux/actions/dashboard";

function Countdown() {
  const [time, setTime] = useState(120);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      refreshToken();
      async function refreshToken() {
        await dispatch(getComponentDetails());
        setTime(120);
      }
    }
  }, [time, dispatch]);

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
