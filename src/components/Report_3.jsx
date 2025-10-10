import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function Report_3() {
  const data = {
       responsive: true,
    maintainAspectRatio: false,
    datasets: [
      {
        label: "Tasks",
        data: [44, 56],
        backgroundColor: ["#4CAF50", "rgba(215, 203, 200, 0.8)"],
        borderColor: "white",
        borderWidth: 2,
        cutout: "60%",
      },
    ],
  };

  const centerText = {
    id: "centerText",
    beforeDraw(chart) {
      const { width, height } = chart;
      const ctx = chart.ctx;
      ctx.restore();

      const fontSize = (height / 100).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      const text = "44%";
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 1.9;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  return (
    <div className="bg-white dark:bg-secondary-dark rounded-3xl shadow-md p-6 h-full flex flex-col">
      <p className="text-2xl text-center font-semibold dark:text-text-dark">
        Weekly Activity
      </p>
      <div className="flex-1 h-64">
        <Doughnut data={data} plugins={[centerText]} />
      </div>
    </div>
  );
}
