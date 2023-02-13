import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import moment from "moment";
import './sensor.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
    bezierCurve: false,
  },
  stacked: true,
  plugins: {
    title: {
      display: true,
      position:'bottom',
      
    }
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left"
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false
      }
    },
    x: {

      display: false,
      position: "top",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },

  }
};

const labels=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'
]

export const data = {
  datasets: [
    {
      
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",

    },
    {
      label: "GDD",

      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1"
    }
  ],
labels
};



export const Precipitation = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Days />
      <Line options={options} data={data} />
    </div>
  );
}


const Days = () => {
  const [days, setDays] = useState([]);
  useEffect(() => {
    let next8Days = [];
    let currentDay = moment().format("MMM DD");
    next8Days.push({ name: "Today", date: currentDay });
    for (let i = 1; i <= 8; i++) {
      let nextDay = moment().add(i, "days").format("MMM DD");
      next8Days.push({ name: moment().add(i, "days").format("ddd"), date: nextDay });
    }
    setDays(next8Days);
  }, []);
  return (
    <div className="days-container">
      {days.map((day, index) => (
        <div key={index} className="day ">
          <div className="day-name  ">{day.name}</div>
          <div className="day-date">{day.date}</div>
        </div>
      ))}
    </div>
  );
};


