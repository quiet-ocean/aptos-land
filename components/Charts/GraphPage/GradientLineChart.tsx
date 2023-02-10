import React from 'react'
import Chart from 'react-apexcharts'

export default function GradientLineChart() {
  return (
    <>
      <Chart
        type='line'
        height='100%'
        width='100%'
        forecolor='#58F1BB'
        series={[
          {
            data: [4, 3, 10, 9, 21, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
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
              gradientToColors: ['#2F6444'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              shade: 'dark',
              shadeIntensity: 1,
              stops: [0, 100, 0],
              type: 'vertical',
            },
          },
          forecastDataPoints: {
            count: 7,
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
              '1/11/2000',
              '2/11/2000',
              '3/11/2000',
              '4/11/2000',
              '5/11/2000',
              '6/11/2000',
              '7/11/2000',
              '8/11/2000',
              '9/11/2000',
              '10/11/2000',
              '11/11/2000',
              '12/11/2000',
              '1/11/2001',
              '2/11/2001',
              '3/11/2001',
              '4/11/2001',
              '5/11/2001',
              '6/11/2001',
            ],
            labels: {
              formatter: (val, timestamp: any, opts) => {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              },
              show: true,
              style: {
                colors: ['#FFFFFF99'],
                fontFamily: 'Nunito',
              },
            },
            tickAmount: 10,
            type: 'datetime',
          },
          yaxis: {
            labels: {
              show: true,
              style: {
                colors: ['#FFFFFF99'],
                fontFamily: 'Nunito',
              },
            },
            max: 25,
            min: 0,
          },
        }}
      ></Chart>
    </>
  )
}
