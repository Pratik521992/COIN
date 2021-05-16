import { CardContent } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CardItem from "../utils/CardItem";
import CountUp from "react-countup";
import {
  usdToInr,
  epoch,
  hashToMegaHash,
  getETH,
  ethToUsd,
  ethToInr,
} from "../utils/converted";
import PayoutChart from "./PayoutChart";
import HashRateChart from "./HashRateChart";
import Countdown from "./Countdown";
import CardKit from "../UIKits/CardKit";
import DataKit from "../UIKits/DataKit";
import MINER from "../../miner.svg";
import BTC from "../../bitcoin.png";

function Dashboard() {
  const {
    stats,
    inr,
    usd,
    unpaid = {},
  } = useSelector((state) => state.dashboard);
  const lastStatsData = stats[stats.length - 1] || "";
  const values = {
    speed: hashToMegaHash(lastStatsData.reportedHashrate),
    minedEth: getETH(unpaid.unpaid),
    minedInr: ethToInr(inr, getETH(unpaid.unpaid)),
    minedUsd: ethToUsd(usd, getETH(unpaid.unpaid)),
  };
  return (
    <div className="Dashboard">
      <div className="Shards">
        <DataKit>
          <CardItem>
            <div>
              <img
                className="ImageContainer"
                src={MINER}
                alt="BigCo Inc. logo"
              />
            </div>
            <span className="CardKitHeader">Active Miners</span>
            <h3
              className={
                lastStatsData.activeWorkers < 1
                  ? "shardValueRed"
                  : "shardValueGreen"
              }
              variant="h5"
              component="h2"
            >
              {lastStatsData.activeWorkers || 0}
            </h3>
            <span className="CardKitHeader">Hash Rate</span>
            <h3
              className={
                values.speed < 56 ? "shardValueRed" : "shardValueGreen"
              }
              variant="h5"
              component="h2"
            >
              <CountUp
                end={values.speed}
                separator=" "
                decimals={2}
                decimal="."
                suffix=" MH/s"
              />
            </h3>
          </CardItem>
          <CardItem>
            <div>
              <img className="ImageContainer" src={BTC} alt="Bitcoin" />
            </div>
            <span className="CardKitHeader">Unpaid</span>
            <h3
              className={
                values.minedEth < 0.001 ? "shardValueRed" : "shardValueGreen"
              }
              variant="h5"
              component="h2"
            >
              <CountUp
                end={values.minedEth}
                separator=","
                decimals={5}
                decimal="."
                suffix=" ETH"
              />
            </h3>
            <h3 className="shardValueGreen" variant="h5" component="h2">
              <CountUp
                end={values.minedInr}
                separator=","
                decimals={2}
                decimal="."
                suffix=" &#x20b9;"
              />
            </h3>
            <h3 className="shardValueGreen" variant="h5" component="h2">
              <CountUp
                end={values.minedUsd}
                separator=","
                decimals={2}
                decimal="."
                suffix=" $"
              />
            </h3>
          </CardItem>
        </DataKit>

        <CardItem className="DashBoardTimer">
          <span color="textSecondary">Last Updated</span>
          <h3 className="shardValueRed">{epoch(unpaid.time)} Min ago</h3>
          <span>Next Refresh</span>
          <h3
            className="shardValueGreen"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gridGap: "20%",
            }}
          >
            <Countdown />
          </h3>
        </CardItem>

        <CardKit>
          <CardContent className="CardKitContent">
            <span className="CardKitHeader">
              INR/Day (24 hrs)
              <h3 className="shardValueGreen">
                {usdToInr(unpaid.usdPerMin * 60 * 24)} &#x20b9;
              </h3>
            </span>

            <span className="CardKitHeader">
              INR/Week (7 days)
              <h3 className="shardValueGreen">
                {usdToInr(unpaid.usdPerMin * 60 * 24 * 7)} &#x20b9;
              </h3>
            </span>

            <span className="CardKitHeader">
              INR/Month (30 days)
              <h3 className="shardValueGreen">
                {usdToInr(unpaid.usdPerMin * 60 * 24 * 30)} &#x20b9;
              </h3>
            </span>

            <span className="CardKitHeader">
              Shares (Valid)
              <h3
                className={`${
                  !unpaid.activeWorkers && "timeLeft"
                } shardValueRed`}
                variant="h5"
                component="h2"
              >
                {unpaid.activeWorkers && unpaid.activeWorkers > 0
                  ? unpaid.validShares
                  : "Miner Inactive"}
              </h3>
            </span>
          </CardContent>
        </CardKit>
      </div>
      <div className="MapContainer">
        <HashRateChart />
        <PayoutChart />
      </div>
    </div>
  );
}

export default Dashboard;
