import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

// material-ui

import { Grid, MenuItem, TextField, Typography } from '@mui/material'

// third-party
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'

// project imports
import SkeletonTotalGrowthBarChart from '../../../components/cards/Skeleton/TotalGrowthBarChart'
import MainCard from '../../../components/cards/MainCard'

// chart data
import chartData from './chart-data/total-growth-bar-chart'

const status = [
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'month',
    label: 'This Month',
  },
  {
    value: 'year',
    label: 'This Year',
  },
]

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
  const [value, setValue] = useState('today')

  const primary = '#29314f'

  const darkLight = '#e3f2fd'
  const grey200 = '#eeeeee'
  const grey500 = '#9e9e9e'

  const primary200 = '#90caf9'
  const primaryDark = '#1e88e5'
  const secondaryMain = '#673ab7'
  const secondaryLight = '#ede7f6'

  useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
              primary,
            ],
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary],
          },
        },
      },
      grid: {
        borderColor: grey200,
      },
      tooltip: {
        theme: 'light',
      },
      legend: {
        labels: {
          colors: grey500,
        },
      },
    }

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData)
    }
  }, [
    primary200,
    primaryDark,
    secondaryMain,
    secondaryLight,
    primary,
    darkLight,
    grey200,
    isLoading,
    grey500,
  ])

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems='center'
                justifyContent='space-between'
              >
                <Grid item>
                  <Grid container direction='column' spacing={1}>
                    <Grid item>
                      <Typography
                        fontFamily={'Roboto, sans-serif'}
                        variant='subtitle2'
                      >
                        Total Growth
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        fontFamily={'Roboto, sans-serif'}
                        variant='h7'
                        fontWeight={600}
                      >
                        $2,324.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    id='standard-select-currency'
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  )
}

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool,
}

export default TotalGrowthBarChart
