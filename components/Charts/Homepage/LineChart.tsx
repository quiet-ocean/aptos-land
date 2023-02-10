import React from 'react'
import Chart from 'react-apexcharts'

export default function LineChart() {
  return (
    <>
      <Chart
        type='area'
        height='100%'
        width='100%'
        forecolor='#58F1BB'
        series={[
          {
            data: [50, 180, 90, 400, 120, 250, 300],
            name: 'sale',
          },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
          },

          colors: ['#58F1BB'],
          dataLabels: {
            enabled: false,
          },
          fill: {
            gradient: {
              colorStops: [],

              gradientToColors: ['#47CAB475', '#000000'],

              // optional, if not defined - uses the shades of same color in series
              inverseColors: true,

              opacityFrom: 0.8,
              opacityTo: 0.1,
              shade: 'light',
              shadeIntensity: 0.5,
              stops: [0, 100, 0],
              type: 'vertical',
            },
            // colors: ["#58F1BB"],
          },
          grid: {
            position: 'back',
            show: true,
            strokeDashArray: 7,
          },
          stroke: {
            curve: 'smooth',
            width: 2,
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            categories: ['Nov 11', 'Nov 12', 'Nov 13', 'Nov 114', 'Nov 15', 'Nov 16', 'Nov 17'],
            labels: {
              show: true,
              style: {
                colors: ['#FFFFFF99'],
                fontFamily: 'Nunito',
              },
            },
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val} btc`
              },
              show: true,
              style: {
                colors: ['#FFFFFF99'],
                fontFamily: 'Nunito',
              },
            },
          },
        }}
      ></Chart>
    </>
  )
}
