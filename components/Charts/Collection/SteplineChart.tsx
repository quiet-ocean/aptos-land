import React from "react";
import Chart from "react-apexcharts";

export default function SteplineChart() {
  return (
    <>
      <Chart
        type="area"
        height="100%"
        width="100%"
        forecolor="#379ffa"
        series={[
          {
            name: "Sale",
            data: [
              34, 44, 54, 21, 12,44, 54, 21, 12,
            ],
          },
        ]}
        options={{
          colors: ["#379ffa"],

          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val} btc`;
              },
              style: {
                colors: ["#FFFFFF99"],
                fontFamily :"Nunito",
              },
              show: true,
            },
          },
          xaxis: {
            categories: ["Nov 11","Nov 12","Nov 13","Nov 14","Nov 15","Nov 16","Nov 17", "Nov 18","Nov 19","Nov 20"],
            labels: {
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
            curve: "stepline",
            width: 2,
          },
          grid: {
            show: true,
            strokeDashArray: 7,
            position: 'back',
          },
          fill: {
            gradient: {
              shade: 'light',
              type: "vertical",
              shadeIntensity: 0.5,
              gradientToColors: ["#2983cc9d", "#000000"],
              inverseColors: true,
              opacityFrom: 0.8,
              opacityTo: 0.1,
              stops: [0, 100, 0],
              colorStops: []
            }
          },
        }}
      ></Chart>
    </>
  );
}
