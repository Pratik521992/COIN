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
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0.5,
            pointRadius: 0.5,
            pointRotation: 4 
          },
        ],
      };
      const chartBody = new Chart(canvasRef.current, {
        
        type: "line",
        data: data,
        options: {
          animations: {
            y: {
              easing: 'easeInOutElastic',
              from: (ctx) => {
                if (ctx.type === 'data') {
                  if (ctx.mode === 'default' && !ctx.dropped) {
                    ctx.dropped = true;
                    return 0;
                  }
                }
              },
            },
          responsive: true,
          plugins: {
            title: {
              display: true,
              padding: {
                top: 10,
                bottom: 30,
              },
            },
          },
          },
        }
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
