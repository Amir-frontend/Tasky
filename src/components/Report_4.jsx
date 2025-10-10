import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function Report_4() {
  const colors = [
    "rgba(255, 99, 132, 1.8)",
    "rgba(54, 162, 235, 1.8)",
    "rgba(255, 206, 86, 1.8)",
    "rgba(75, 192, 192, 1.8)",
    "rgba(153, 102, 255, 1.8)",
    "rgba(255, 159, 64, 1.8)",
    "rgba(199, 199, 199, 1.8)",
    "rgba(255, 99, 71, 1.8)",
    "rgba(100, 181, 246, 1.8)",
    "rgba(0, 200, 83, 1.8)",
    "rgba(255, 138, 101, 1.8)",
    "rgba(244, 143, 177, 1.8)",
    "rgba(255, 238, 88, 1.8)",
    "rgba(129, 199, 132, 1.8)",
    "rgba(179, 157, 219, 1.8)",
  ];

  const DataValues = [33, 22, 66];

  const data = {
    labels: ["p-1", "p-2", "p-3"],
    datasets: [
      {
        data: DataValues,
        backgroundColor: colors.slice(0, DataValues.length),
        borderWidth: 2,
        borderColor: "white",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white dark:bg-secondary-dark rounded-3xl shadow-md p-6 h-full flex flex-col">
      <p className="text-2xl font-semibold pl-4 pb-4 dark:text-text-dark">
        Task Completion by Project
      </p>
      <div className="flex-1 pl-3 pr-20">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
