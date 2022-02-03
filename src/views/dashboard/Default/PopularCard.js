import PropTypes from 'prop-types'
import { useState } from 'react'

// material-ui
// import { useTheme } from '@mui/material/styles'
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'

// project imports
import BajajAreaChartCard from './BajajAreaChartCard'
import MainCard from '../../../components/cards/MainCard'
import SkeletonPopularCard from '../../../components/cards/Skeleton/PopularCard'

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent='center'
                  justifyContent='space-between'
                >
                  <Grid item>
                    <Typography variant='h6'>Popular Stocks</Typography>
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize='small'
                      sx={{
                        color: '#90caf9',
                        cursor: 'pointer',
                      }}
                      aria-controls='menu-popular-card'
                      aria-haspopup='true'
                      onClick={handleClick}
                    />
                    <Menu
                      id='menu-popular-card'
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant='selectedMenu'
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      <MenuItem onClick={handleClose}> Today</MenuItem>
                      <MenuItem onClick={handleClose}> This Month</MenuItem>
                      <MenuItem onClick={handleClose}> This Year </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: '16px !important' }}>
                <BajajAreaChartCard />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          Bajaj Finery
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $1839.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#b9f6ca',
                                color: '#00c853',
                                ml: 2,
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant='subtitle2'
                      sx={{ color: 'success.dark' }}
                    >
                      10% Profit
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          TTML
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $100.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#fbe9e7',
                                color: '#d84315',
                                marginLeft: 1.875,
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle2' sx={{ color: '#d84315' }}>
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          Reliance
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $200.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#b9f6ca',
                                color: '#00c853',
                                ml: 2,
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle2' sx={{ color: '#00c853' }}>
                      10% Profit
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          TTML
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $189.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#fbe9e7',
                                color: '#d84315',
                                ml: 2,
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle2' sx={{ color: '#d84315' }}>
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction='column'>
                  <Grid item>
                    <Grid
                      container
                      alignItems='center'
                      justifyContent='space-between'
                    >
                      <Grid item>
                        <Typography variant='subtitle1' color='inherit'>
                          Stolon
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid
                          container
                          alignItems='center'
                          justifyContent='space-between'
                        >
                          <Grid item>
                            <Typography variant='subtitle1' color='inherit'>
                              $189.00
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant='rounded'
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#fbe9e7',
                                color: '#d84315',
                                ml: 2,
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon
                                fontSize='small'
                                color='inherit'
                              />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle2' sx={{ color: '#d84315' }}>
                      10% loss
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size='small' disableElevation>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  )
}

PopularCard.propTypes = {
  isLoading: PropTypes.bool,
}

export default PopularCard
