import PropTypes from 'prop-types'
import { useState } from 'react'

// material-ui
import { styled } from '@mui/material/styles'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'

// third-party
import Chart from 'react-apexcharts'

// project imports
import MainCard from '../../../components/cards/MainCard'
import SkeletonTotalOrderCard from '../../../components/cards/Skeleton/EarningCard'

import ChartDataMonth from './chart-data/total-order-month-line-chart'
import ChartDataYear from './chart-data/total-order-year-line-chart'

// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: '#1e88e5',
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5,
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: '#1565c0',
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140,
    },
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: '#1565c0',
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70,
    },
  },
}))

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading }) => {
  const [timeValue, setTimeValue] = useState(false)
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue)
  }

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction='column'>
              <Grid item>
                <Grid container justifyContent='space-between'>
                  <Grid item>
                    <Avatar
                      variant='rounded'
                      sx={{
                        cursor: 'pointer',
                        borderRadius: '8px',
                        width: '44px',
                        height: '44px',
                        fontSize: '1.5rem',
                        backgroundColor: '#1565c0',
                        color: '#fff',
                        mt: 1,
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize='inherit' />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      variant={timeValue ? 'contained' : 'text'}
                      size='small'
                      sx={{ color: 'inherit' }}
                      onClick={(e) => handleChangeTime(e, true)}
                    >
                      Month
                    </Button>
                    <Button
                      disableElevation
                      variant={!timeValue ? 'contained' : 'text'}
                      size='small'
                      sx={{ color: 'inherit' }}
                      onClick={(e) => handleChangeTime(e, false)}
                    >
                      Year
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems='center'>
                  <Grid item xs={6}>
                    <Grid container alignItems='center'>
                      <Grid item>
                        {timeValue ? (
                          <Typography
                            sx={{
                              fontSize: '2.125rem',
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            $108
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              fontSize: '2.125rem',
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            $961
                          </Typography>
                        )}
                      </Grid>
                      <Grid item>
                        <Avatar
                          sx={{
                            width: '22px',
                            height: '22px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            backgroundColor: '#90caf9',
                            color: '#1e88e5',
                          }}
                        >
                          <ArrowDownwardIcon
                            fontSize='inherit'
                            sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }}
                          />
                        </Avatar>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: '#90caf9',
                          }}
                        >
                          Total Order
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    {timeValue ? (
                      <Chart {...ChartDataMonth} />
                    ) : (
                      <Chart {...ChartDataYear} />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  )
}

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool,
}

export default TotalOrderLineChartCard
