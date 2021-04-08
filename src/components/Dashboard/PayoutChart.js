import Chart from "chart.js";
import React, { useEffect } from "react";
import CardItem from "../utils/CardItem";
import { useSelector } from "react-redux";
import { getETHChart } from "../utils/converted";

const canvasRefBar = React.createRef();

function PayoutChart() {
  const { payouts: rounds } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (rounds) {
      const roundsData = rounds.data
        .filter((data, i, arr) => i < arr.length - 900)
        .map((data) => getETHChart(data.amount));

      const roundsLabel = rounds.data
        .filter((data, i, arr) => i < arr.length - 900)
        .map(
          (data) => `${Math.floor(((data.block / 10000) * 1000) / 1000)}...`
        );

      const data = {
        labels: roundsLabel,
        datasets: [
          {
            label: "Payouts milli ETH",
            data: roundsData,
            borderColor: "rgba(75, 192, 192, 0.9)",
            backgroundColor: "rgba(255, 99, 132, 0.9)",
            borderWidth: 1,
          },
        ],
      };
      const chartBody = new Chart(canvasRefBar.current, {
        type: "bar",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Chart.js Bar Chart",
            },
          },
        },
      });

      chartBody.render();
    }
  }, [rounds]);
  return (
    <div>
      <CardItem>
        <canvas ref={canvasRefBar} />
      </CardItem>
    </div>
  );
}

export default PayoutChart;
