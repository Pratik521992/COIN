import { Typography } from "@material-ui/core";
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

function Dashboard() {
  const { stats, inr, usd, unpaid={} } = useSelector((state) => state.dashboard);
  const lastStatsData = stats[stats.length-1] || ''
  const values = {
    speed : hashToMegaHash(lastStatsData.reportedHashrate),
    minedEth: getETH(unpaid.unpaid),
    minedInr: ethToInr(inr, getETH(unpaid.unpaid)),
    minedUsd: ethToUsd(usd, getETH(unpaid.unpaid))
  }
  return (
    <div className="Dashboard">
      <div className="Shards">
        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            Active Miners
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {lastStatsData.activeWorkers}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Hash Rate
          </Typography>
          <Typography className={values.speed<56 ? "shardValueRed": "shardValueGreen"} variant="h5" component="h2">
            <CountUp
              end={values.speed}
              separator=" "
              decimals={2}
              decimal="."
              suffix=" MH/s"
            />
          </Typography>
        </CardItem>

        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            Ballance Amount
          </Typography>
          <Typography className={values.minedEth<0.001 ? "shardValueRed": "shardValueGreen"} variant="h5" component="h2">
          <CountUp
              end={values.minedEth}
              separator=","
              decimals={5}
              decimal="."
              suffix=" ETH"
              />
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Mined INR
          </Typography>
          <Typography className="shardValueGreen" variant="h5" component="h2">
          <CountUp
              end={values.minedInr}
              separator=","
              decimals={2}
              decimal="."
              suffix=" &#x20b9;"
            />
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Unpaid USD
          </Typography>
          <Typography className="shardValueGreen" variant="h5" component="h2">
          <CountUp
              end={values.minedUsd}
              separator=","
              decimals={2}
              decimal="."
              suffix=" $"
            />
          </Typography>         
        </CardItem>

        <CardItem>
          <Typography color="textSecondary" gutterBottom>
           Last Updated
          </Typography>
          <Typography className="shardValueRed" variant="h5" component="h2">
            {epoch(lastStatsData.time)} Min ago
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Next Refresh
          </Typography>
          <Typography className="shardValueGreen" style={{display:'flex', justifyContent:'center', alignItems:'center',gridGap: '20%'}} variant="h5" component="h2">
            <Countdown stats={lastStatsData} /> Sec
          </Typography>
        </CardItem>

        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            INR/Day (24 hrs)
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
             {usdToInr(unpaid.usdPerMin * 60 * 24)} &#x20b9;
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            INR/Week (7 days)
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
             {usdToInr(unpaid.usdPerMin * 60 * 24 * 7)} &#x20b9;
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            INR/Month (30 days)
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
             {usdToInr(unpaid.usdPerMin * 60 * 24 * 30)} &#x20b9;
          </Typography>
        </CardItem>

        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            Shares (Valid)
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {lastStatsData.validShares}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Invalid Shares
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {lastStatsData.invalidShares}
          </Typography>
        </CardItem>
      </div>
      <div className="MapContainer">
        <HashRateChart />
        <PayoutChart />
      </div>
      {/* <div className="InfoContainer">
        <CardItem />
        <CardItem />
        <CardItem />
      </div> */}
    </div>
  );
}

export default Dashboard;
