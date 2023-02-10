import React from 'react'
import Chart from 'react-apexcharts'

export default function SteplineChart() {
  return (
    <>
      <Chart
        type='area'
        height='100%'
        width='100%'
        forecolor='#379ffa'
        series={[
          {
            data: [34, 44, 54, 21, 12, 44, 54, 21, 12],
            name: 'Sale',
          },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
          },

          colors: ['#379ffa'],
          dataLabels: {
            enabled: false,
          },
          fill: {
            gradient: {
              colorStops: [],
              gradientToColors: ['#2983cc9d', '#000000'],
              inverseColors: true,
              opacityFrom: 0.8,
              opacityTo: 0.1,
              shade: 'light',
              shadeIntensity: 0.5,
              stops: [0, 100, 0],
              type: 'vertical',
            },
          },
          grid: {
            position: 'back',
            show: true,
            strokeDashArray: 7,
          },
          stroke: {
            curve: 'stepline',
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
              'Nov 18',
              'Nov 19',
              'Nov 20',
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
