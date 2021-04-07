import Chart from 'chart.js';
import React, { useEffect } from 'react'
import CardItem from '../utils/CardItem';

const canvasRef = React.createRef();

function HashRateChart() {
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
              borderWidth: 1.2
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
        <div>
            <CardItem>
          <canvas ref={canvasRef} />
        </CardItem>
        </div>
    )
}

export default HashRateChart
