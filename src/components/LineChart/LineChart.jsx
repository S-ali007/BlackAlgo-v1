"use client"
import { Line } from "react-chartjs-2";
import { Data } from "../allCharts/ChartsData/chartData";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
  } from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function LineChart({extraClasses,extraColor}) {
    const LinechartData = {
        labels: Data.flatMap((data) => (data.year ? data.year : [])),
        datasets: [
          {
            label: "S&P 500",
            data: Data.flatMap((data) => (data.Cyrpto ? data.Cyrpto : [])),
            borderColor: "#9C42F5",
            backgroundColor: "#9C42F5",
            // pointRadius: [0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
            pointRadius: false,
            pointBorderColor: "white",
            pointBackgroundColor: "#9C42F5",
            // pointBorderWidth: 11,
            // fill: {
            //   target: "origin",
            //   above: "#FEE2E2",
            // },
            borderRadius: 1,
          },
          {
            label: "Bitcoin",
            data: Data.flatMap((data) => (data.Credit ? data.Credit : [])),
            borderColor: "#EF0",
            backgroundColor: "#EF0",
            // pointRadius: [0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
            pointRadius: false,
            pointBorderColor: "white",
            pointBackgroundColor: "#EF0",
            // pointBorderWidth: 11,
            fill: "origin",
            borderRadius: 1,
          },
          {
            label: "BLACKALGO",
            data: Data.flatMap((data) => (data.Cash ? data.Cash : [])),
            borderColor: "#0BF",
            backgroundColor: "#EFF6FF",
            pointRadius: false,
            pointBorderColor: "white",
            pointBackgroundColor: "#0BF",
            // pointBorderWidth: 11,
            fill: "origin",
            borderRadius: 1,
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            ticks: {
              // stepSize: 6,
            },
            grid: {
              display: false,
              drawOnChartArea: true,
            },
          },
          y: {
            grid: {
              display: true,
              drawOnChartArea: true,
              color: "#E0E0FF1F",
            },
    
            beginAtZero: true,
            min: 0,
            border: {
              display: false,
            },
    
            ticks: {
              callback: function (value, index, ticks) {
                return value + " % ";
              },
              stepSize: 20,
            },
          },
        },
    
        plugins: {
          legend: {
            position: false,
          },
    
          options: {},
        },
      };
  return (
    
        <div>
   
    {/* chart-line */}
      
      <div className="pt-[29px]    w-full flex justify-end items-end">
        <Line
          data={LinechartData}
          options={options}
          width={"649px"}
          height={"385px"}
        />
      </div>
   
    </div>
  
  )
}

export default LineChart
