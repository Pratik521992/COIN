import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getComponentDetails } from "../../redux/actions/dashboard";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function Countdown({children}) {
  const [time, setTime] = useState(100);
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
        setTime(100);
      }
    }
  }, [time, dispatch]);

  return (
    <div
      className="timeLeft"
      style={time > 60 ? { color: "#757de8" } : { color: "orangered" }}
    >    
    <Box position="relative" display="inline-flex">
      <CircularProgress color={time > 60 ? "primary" : "secondary"} size={90} thickness={3.6} variant="determinate" value={time} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {time} sec
      </Box>
      </Box>  
    </div>
  );
}

export default Countdown;
