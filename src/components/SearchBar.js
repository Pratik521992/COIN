import { Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { ethToInr, getETH } from "./utils/converted";

function SearchBar() {
  const { netWorth='', inr } = useSelector((state) => state.dashboard);
  const ETH = getETH(netWorth);
  const value = ethToInr(inr, getETH(netWorth));
  return (
    <div className="Search">
      <Typography style={{marginRight: "70px"}} >
            NET WORTH $$
          </Typography>
      <Typography style={{color: 'green'}} variant="h5" component="h2">
            <CountUp
              end={value}
              separator=","
              decimals={2}
              decimal="."
              suffix=" &#x20b9;"
            />
          </Typography>
      <Typography style={{color: 'green'}} variant="h5" component="h2">
            <CountUp
              end={ETH}
              separator=" "
              decimals={2}
              decimal="."
              suffix=" ETH"
            />
          </Typography>
    </div>
  );
}

export default SearchBar;
