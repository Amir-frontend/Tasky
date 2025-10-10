import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function Report_2() {
  const data = {
    labels: ["Done", "Not Done"],
    datasets: [
      {
        label: "Tasks",
        data: [44, 56], // 👈 72% Done
        backgroundColor: ["#4CAF50", "rgba(215, 203, 200, 8)"],
        borderColor: "white",
        borderWidth: 2,
        cutout: "60%", // يخليها Doughnut
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" ,
        
        labels: {
          boxWidth: 30,
          font:{
            size:15
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        
      },
    },
  };

  // 👇 Plugin لكتابة النص في النص
  const centerText = {
    id: "centerText",
    beforeDraw(chart) {
      const { width } = chart;
      const { height } = chart;
      const ctx = chart.ctx;
      ctx.restore();

      const fontSize = (height / 100).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      const text = "44%"; // 👈 النسبة اللي هتظهر
      const textX = Math.round((width - ctx.measureText(text).width) / 2.8);
      const textY = height / 1.8;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  return (
    <div className="w-full h-[450px] bg-white dark:bg-secondary-dark rounded-3xl shadow-md p-6">
          <p className="text-2xl font-semibold pl-5 dark:text-text-dark">
       Task completion Ratio
      </p>
      <div className="w-full h-80">
      <Doughnut className="dark:text-text-dark" data={data} options={options} plugins={[centerText]} />
      </div>
    </div>
  );
}
