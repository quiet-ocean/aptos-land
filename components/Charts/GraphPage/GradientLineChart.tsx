import React from "react";
import Chart from "react-apexcharts";

export default function GradientLineChart() {
  return (
    <>
      <Chart
        type="line"
        height="100%"
        width="100%"
        forecolor="#58F1BB"
        series={[
          {
            name: "sale",
            data: [4, 3, 10, 9, 21, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
          },
        ]}
        options={{
          colors: ["#58F1BB"],
          forecastDataPoints:{
            count : 7
          },
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
              min: 0,
              max: 25,
              labels: {
              style: {
                colors: ["#FFFFFF99"],
                fontFamily :"Nunito",
              },
              show: true,
            },
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 10,
            labels : {
              formatter: (val, timestamp:any, opts) => {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              },
              show: true,
              style: {
                colors: ["#FFFFFF99"],
                fontFamily :"Nunito"
              },
            },
             axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },            
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          grid: {
            show: true,
            strokeDashArray: 7,
            position: 'back',
          },
          fill: {
            gradient: {
              shade: 'dark',
              type: "vertical",
              shadeIntensity: 1,
              gradientToColors: ["#2F6444"],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 0],
              colorStops: []
            }
          },
        }}
      ></Chart>
    </>
  );
}
