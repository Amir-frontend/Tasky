import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function Report_1() {
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
    "rgba(129, 199, 132,1.8)",  
    "rgba(179, 157, 219, 1.8)", 
  ];

  const Datavalue = [50, 30, 20,40];

  const data = {
    labels: ["Project 1", "Project 2", "Project 3" ,"p-4"],
    datasets: [
      {
        label: "Time",
        data: Datavalue,
        backgroundColor: colors.slice(0, Datavalue.length), // 👈 يختار عدد الألوان المناسب
        borderColor: "white",
        borderWidth: 2,
        color:"dark:text-text-dark"
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
        labels: {
          boxWidth: 20,
          padding: 20,
         
        },
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-md p-6 dark:bg-secondary-dark">
      <p className="text-2xl font-semibold pl-5 dark:text-text-dark">Time Distribution by Project</p>
      <div className="w-full h-80 p-5">
        <Pie data={data} options={options} />
      </div>
      <p className="text-md dark:text-text-dark">Project Periods</p>
    </div>
  );
}
