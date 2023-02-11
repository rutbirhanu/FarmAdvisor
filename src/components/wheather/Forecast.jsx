import React, { useState } from 'react';
import Chart from 'react-google-charts';
import { faker } from '@faker-js/faker';

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
    intersect: false
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis"
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
    }
    //   x: {
    //     type: "linear" as const,
    //     display: true,
    //     position: "top" as const
    //   }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Temperature",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y"
    },
    {
      label: "GDD",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1"
    }
  ]
};

export const  Forecast =()=>{

    const LineData=[
        ['days','temp','oth','gdd'],
        [0,0,0,0],
        [1,5,8,20],
        [2,6,9,40],
        [3,45,56,30],
        [4,56,34,50]
    ]
    const LineChartsOption={
        hAxis:{
            title:'Day',
            series: {
                0: { curveType: 'function' },
              },
        },
        vAxis: {
            title: 'Temperature',
          },
        
        rvAxis:{
            title:'GDD'
        }

    }

    return(
        <div className='container mt-5'>
            <span >Weather Forecast <h4 style={{display:'inline'}}>Statistics</h4></span>
            
            <Chart
             width={'700px'}
             height={'410px'}
             chartType="LineChart"
             loader={<div>Loading Temperature Statistics</div>}
             data={LineData}
             options={LineChartsOption}
             backgroundColor="white"
    
             rootProps={{ 'data-testid': '2' }}
           />
          
        </div>
    );
}

export const Precipitation =()=>{
    return(
        <>
         <h2>Precipitation</h2>
           <Line options={options} data={data} />
        </>
    );
}