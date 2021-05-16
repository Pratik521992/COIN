import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { ethToInr, getETH } from "./utils/converted";
import CardItem from "./utils/CardItem";
import CURRENCY from "../currency.svg";

function SearchBar() {
  const { netWorth = "", inr } = useSelector((state) => state.dashboard);
  const ETH = getETH(netWorth);
  const value = ethToInr(inr, getETH(netWorth));
  return (
    <CardItem className="Search">
      <img className="currencyImage" src={CURRENCY} alt="Bitcoin" />
      <h3 style={{ color: "green" }} variant="h5" component="h2">
        <CountUp
          end={value}
          separator=","
          decimals={2}
          decimal="."
          suffix=" &#x20b9;"
        />
      </h3>
      <h3 style={{ color: "green" }} variant="h5" component="h2">
        <CountUp
          end={ETH}
          separator=" "
          decimals={2}
          decimal="."
          suffix=" ETH"
        />
      </h3>
    </CardItem>
  );
}

export default SearchBar;
