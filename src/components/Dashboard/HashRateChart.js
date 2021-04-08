import Chart from "chart.js";
import React, { useEffect } from "react";
import CardItem from "../utils/CardItem";
import { useSelector } from "react-redux";
import { hashToMegaHash } from "../utils/converted";

const canvasRef = React.createRef();

function HashRateChart() {
  const { stats: history } = useSelector((state) => state.dashboard);
  useEffect(() => {
    if (history) {
      const historyData = history.map((data) =>
        hashToMegaHash(data.reportedHashrate)
      );
      const historyLabel = history.map((data) =>
        new Date(data.time * 1000).toLocaleTimeString()
      );

      const data = {
        labels: historyLabel,
        datasets: [
          {
            label: "Hash Rate Mh/s",
            data: historyData,
            fill: true,
            borderColor: "#2f3640",
            borderWidth: 1.2,
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
    }
  }, [history]);
  return (
    <div>
      <CardItem>
        <canvas ref={canvasRef} />
      </CardItem>
    </div>
  );
}

export default HashRateChart;
