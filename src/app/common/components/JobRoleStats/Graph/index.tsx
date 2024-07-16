"use client"
import Button from "../../../atoms/Button";
import Typography from "../../../atoms/Typography";
import Graph from "../../../../../../public/images/CoursesPage/graph.png"
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};
ChartJS.defaults.color = '#5B5B5B';
ChartJS.defaults.font.weight= "bold"

const labels = ['Min Salary', 'Avg Salary', 'Max Salary'];

export const data = {
  labels,
  datasets: [{
    label: 'Salaries in LPA',
    data: [8, 18, 24],
    borderWidth: 1,
    backgroundColor: "#2B63E1"
  }],
};

const JobRoleGraph = () => {
  return (
    <div className="my-7 md:my-10">
      <div className="bg-white">
        <div className="w-full max-w-lg">
        <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default JobRoleGraph;
