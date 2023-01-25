import React from "react";
import Chart from "react-apexcharts";

export default function LineChart() {
  return (
    <>
      <Chart
        type="area"
        height="100%"
        width="100%"
        forecolor="#58F1BB"
        series={[
          {
            name: "sale",
            data: [
              50, 180, 90, 400, 120, 250, 300,
            ],
          },
        ]}
        options={{
          colors: ["#58F1BB"],

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
            categories: ["Nov 11","Nov 12","Nov 13","Nov 114","Nov 15","Nov 16","Nov 17"],
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
              shade: 'light',
              type: "vertical",
              shadeIntensity: 0.5,
              gradientToColors: ["#47CAB475", "#000000"], // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 0.8,
              opacityTo: 0.1,
              stops: [0, 100, 0],
              colorStops: []
            }
            // colors: ["#58F1BB"],
          },
        }}
      ></Chart>
    </>
  );
}
