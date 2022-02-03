import { useEffect } from 'react'

// material-ui

import { Card, Grid, Typography } from '@mui/material'

// third-party
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'

// project imports
import chartData from './chart-data/bajaj-area-chart'

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const BajajAreaChartCard = () => {
  const orangeDark = '#4527a0'

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: {
        theme: 'light',
      },
    }
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart)
  }, [orangeDark])

  return (
    <Card sx={{ bgcolor: 'rgb(237, 231, 246)' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item>
              <Typography variant='subtitle1' sx={{ color: '#5e35b1' }}>
                Bajaj Finery
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6' sx={{ color: '#616161' }}>
                $1839.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle2' sx={{ color: '#616161' }}>
            10% Profit
          </Typography>
        </Grid>
      </Grid>
      <Chart {...chartData} />
    </Card>
  )
}

export default BajajAreaChartCard
