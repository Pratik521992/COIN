import Chart from 'chart.js';
import React, { useEffect } from 'react'
import CardItem from '../utils/CardItem'

const canvasRefBar = React.createRef();

function PayoutChart() {
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
                    label: 'Payouts',
                    data: [65, 59, 80, 81, 26, 55, 40, 65, 59, 80, 81, 26, 55, 40],
                    borderColor: 'rgba(75, 192, 192, 0.9)',
                    backgroundColor: 'rgba(255, 99, 132, 0.9)',
                    borderWidth: 1,
                    borderRadius: 6,
                    borderSkipped: 'bottom',
                    barThickness: 7,
                  },
              ],
            };
            const chartBody = new Chart(canvasRefBar.current, {
                type: 'bar',
                data: data,
                options: {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Chart.js Bar Chart'
                    }
                  }
                },
            });
        
            chartBody.render();
          }, [])
    return (
        <div>
            <CardItem>
          <canvas ref={canvasRefBar} />
        </CardItem> 
        </div>
    )
}

export default PayoutChart
