import { Typography } from "@material-ui/core";
import { Chart } from "chart.js";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardItem from "../utils/CardItem";
import {
  usdToInr,
  epoch,
  hashToMegaHash,
  getETH,
  ethToUsd,
  ethToInr,
} from "../utils/converted";

const canvasRef = React.createRef();

function Dashboard() {
  const { stats, inr, usd } = useSelector((state) => state.dashboard);
  useEffect(() => {
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      datasets: [
        {
          label: "Hash Rate",
          data: [65, 59, 80, 81, 26, 55, 40, 65, 59, 80, 81, 26, 55, 40],
          fill: true,
          borderColor: "#2f3640",
        },
      ],
    };
    const chartBody = new Chart(canvasRef.current, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Custom Chart Title",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
        },
      },
    });

    chartBody.render();
  }, []);

  return (
    <div className="Dashboard">
      <div className="Shards">
        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            Active Miners
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {stats.activeWorkers}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Hash Rate
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {hashToMegaHash(stats.reportedHashrate)} MH/s
          </Typography>
        </CardItem>

        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            Worker active since
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {epoch(stats.lastSeen).toLocaleString()}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Last Update
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {epoch(stats.time).toLocaleString()}
          </Typography>
        </CardItem>

        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            INR/Day (24 hrs)
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            &#x20b9; {usdToInr(stats.usdPerMin * 60 * 24)}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            INR/Week (7 days)
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            &#x20b9; {usdToInr(stats.usdPerMin * 60 * 24 * 7)}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            INR/Month (30 days)
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            &#x20b9; {usdToInr(stats.usdPerMin * 60 * 24 * 30)}
          </Typography>
        </CardItem>

        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            Unpaid Amount
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {getETH(stats.unpaid)} ETH
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Unpaid USD
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            $ {ethToUsd(usd, getETH(stats.unpaid))|| 'Loading...'}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Unpaid INR
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            &#x20b9; {ethToInr(inr, getETH(stats.unpaid))|| 'Loading...'}
          </Typography>
        </CardItem>

        <CardItem>
          <Typography color="textSecondary" gutterBottom>
            Shares (Valid)
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {stats.validShares}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Invalid Shares
          </Typography>
          <Typography className="shardValue" variant="h5" component="h2">
            {stats.invalidShares}
          </Typography>
        </CardItem>
      </div>
      <div className="MapContainer">
        <CardItem>
          <canvas ref={canvasRef} />
        </CardItem>
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
