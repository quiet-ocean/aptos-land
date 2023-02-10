import React from 'react'
import Chart from 'react-apexcharts'

export default function BarChart() {
  return (
    <>
      <Chart
        type='bar'
        height='100%'
        width='100%'
        forecolor='#d1755a'
        series={[
          {
            data: [50, 180, 400, 120, 250, 30, 250, 90, 40, 120, 300, 50, 180, 90],
            name: 'sale',
          },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
          },

          colors: ['#d1755a'],
          dataLabels: {
            enabled: false,
          },
          fill: {
            gradient: {
              colorStops: [],

              gradientToColors: ['#2799b3', '#a2dbe8'],

              // optional, if not defined - uses the shades of same color in series
              inverseColors: true,

              opacityFrom: 0.5,
              opacityTo: 0.1,
              shade: 'dark',
              shadeIntensity: 0.5,
              stops: [0, 0, 0],
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
            categories: [
              'Nov 11',
              'Nov 12',
              'Nov 13',
              'Nov 14',
              'Nov 15',
              'Nov 16',
              'Nov 17',
              'Sec 11',
              'Sec 12',
              'Sec 13',
              'Sec 14',
              'Sec 15',
              'Sec 16',
              'Sec 17',
            ],
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
