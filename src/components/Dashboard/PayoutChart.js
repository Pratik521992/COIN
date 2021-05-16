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
        .filter((data, i, arr) => {
          if(arr.length<200) return true;
          return i > arr.length - 100;
        })
        .map((data) => getETHChart(data.amount));

      const roundsLabel = rounds.data
        .filter((data, i, arr) => {
          if(arr.length<200) return true;
          return i > arr.length - 100;
        })
        .map(
          (data) => `${Math.floor(((data.block / 10000) * 1000) / 1000)}...`
        );

      const data = {
        labels: roundsLabel,
        datasets: [
          {
            label: "Payouts milli ETH",
            data: roundsData,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            tension: 0.5,
            pointRadius: 0.5,
            pointRotation: 4            
          },
        ],
      };
      const chartBody = new Chart(canvasRefBar.current, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            }
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
