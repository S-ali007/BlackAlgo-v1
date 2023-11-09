"use client";

import { Line } from "react-chartjs-2";
import { Data } from "../ChartsData/chartData";

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

function LineChartColor({ extraClasses, extraColor }) {
  const LinechartColorData = {
    labels: Data.flatMap((data) => (data.Month ? data.Month : [])),
    datasets: [
      {
        label: "S&P 500",
        data: Data.flatMap((data) => (data.price ? data.price : [])),
        borderColor: "#00BBFF",
        backgroundColor: "#FEE2E2",
        pointRadius: false,
        fill: true,
        fill: {
          target: "origin",
          above: "#FEE2E2",
        },

        borderRadius: 1,
      },
    ],
  };
  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },

    scales: {
      y: {
        border: {
          display: false,
        },
        beginAtZero: false,
        max: 20000,
        min: 500,

        ticks: {
          stepSize: 5000,
        },
        grid: {
          display: true,
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div className={`mx-auto max-w-[882px] w-full ${extraClasses} `}>
      <Line data={LinechartColorData} options={options} />
    </div>
  );
}

export default LineChartColor;
