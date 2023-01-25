import React from "react";
import Chart from "react-apexcharts";

export default function BarChart() {
  return (
    <>
      <Chart
        type="bar"
        height="100%"
        width="100%"
        forecolor="#d1755a"
        series={[
          {
            name: "sale",
            data: [
              50, 180, 400, 120, 250, 30,250,90, 40, 120, 300, 50, 180, 90
            ],
          },
        ]}
        options={{
          colors: ["#d1755a"],

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
            categories: ["Nov 11","Nov 12","Nov 13","Nov 14","Nov 15","Nov 16","Nov 17",
                "Sec 11","Sec 12","Sec 13","Sec 14","Sec 15","Sec 16","Sec 17"],
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
              shadeIntensity: 0.5,
              gradientToColors: ["#2799b3", "#a2dbe8"], // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 0.5,
              opacityTo: 0.1,
              stops: [0, 0, 0],
              colorStops: []
            }
            // colors: ["#58F1BB"],
          },
        }}
      ></Chart>
    </>
  );
}
