import PropTypes from 'prop-types'
import { useState } from 'react'

// material-ui
import { useTheme, styled } from '@mui/material/styles'
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  Grid,
  InputAdornment,
  OutlinedInput,
  Popper,
} from '@mui/material'

// third-party
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state'

// project imports
import Transitions from '../../extended/Transitions'

// assets
import { IconAdjustmentsHorizontal, IconSearch, IconX } from '@tabler/icons'
import { shouldForwardProp } from '@mui/system'

// styles
const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
  zIndex: 1100,
  width: '99%',
  top: '-55px !important',
  padding: '0 12px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 10px',
  },
}))

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(
  ({ theme }) => ({
    width: 434,
    marginLeft: 16,
    paddingLeft: 16,
    paddingRight: 16,
    '& input': {
      background: 'transparent !important',
      paddingLeft: '4px !important',
    },
    [theme.breakpoints.down('lg')]: {
      width: 250,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 4,
      background: '#fff',
    },
  })
)

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(() => ({
  cursor: 'pointer',
  borderRadius: '8px',
  width: '34px',
  height: '34px',
  fontSize: '1.2rem',
  background: '#ede7f6',
  color: '#5e35b1',
  '&:hover': {
    background: '#5e35b1',
    color: '#ede7f6',
  },
}))

// ==============================|| SEARCH INPUT - MOBILE||============================== //

const MobileSearch = ({ value, setValue, popupState }) => {
  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <OutlineInputStyle
        style={{ borderRadius: 12 }}
        id='input-search-header'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search'
        startAdornment={
          <InputAdornment position='start'>
            <IconSearch stroke={1.5} size='1rem' color={'#9e9e9e'} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position='end'>
            <ButtonBase sx={{ borderRadius: '12px' }}>
              <HeaderAvatarStyle variant='rounded'>
                <IconAdjustmentsHorizontal stroke={1.5} size='1.3rem' />
              </HeaderAvatarStyle>
            </ButtonBase>
            <Box sx={{ ml: 2 }}>
              <ButtonBase sx={{ borderRadius: '12px' }}>
                <Avatar
                  variant='rounded'
                  sx={{
                    cursor: 'pointer',
                    borderRadius: '8px',
                    width: '34px',
                    height: '34px',
                    fontSize: '1.2rem',
                    background: '#fbe9e7',
                    color: '#d84315',
                    '&:hover': {
                      background: '#d84315',
                      color: '#fbe9e7',
                    },
                  }}
                  {...bindToggle(popupState)}
                >
                  <IconX stroke={1.5} size='1.3rem' />
                </Avatar>
              </ButtonBase>
            </Box>
          </InputAdornment>
        }
        aria-describedby='search-helper-text'
        inputProps={{ 'aria-label': 'weight' }}
      />
    </Box>
  )
}

MobileSearch.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  popupState: PopupState,
}

// ==============================|| SEARCH INPUT ||============================== //

const SearchSection = () => {
  const theme = useTheme()
  const [value, setValue] = useState('')

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <PopupState variant='popper' popupId='demo-popup-popper'>
          {(popupState) => (
            <>
              <Box sx={{ ml: 2 }}>
                <ButtonBase sx={{ borderRadius: '12px' }}>
                  <HeaderAvatarStyle
                    variant='rounded'
                    {...bindToggle(popupState)}
                  >
                    <IconSearch stroke={1.5} size='1.2rem' />
                  </HeaderAvatarStyle>
                </ButtonBase>
              </Box>
              <PopperStyle {...bindPopper(popupState)} transition>
                {({ TransitionProps }) => (
                  <>
                    <Transitions
                      type='zoom'
                      {...TransitionProps}
                      sx={{ transformOrigin: 'center left' }}
                    >
                      <Card
                        sx={{
                          background: '#fff',
                          [theme.breakpoints.down('sm')]: {
                            border: 0,
                            boxShadow: 'none',
                          },
                        }}
                      >
                        <Box sx={{ p: 2 }}>
                          <Grid
                            container
                            alignItems='center'
                            justifyContent='space-between'
                          >
                            <Grid item xs>
                              <MobileSearch
                                value={value}
                                setValue={setValue}
                                popupState={popupState}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Transitions>
                  </>
                )}
              </PopperStyle>
            </>
          )}
        </PopupState>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <OutlineInputStyle
          style={{ borderRadius: 12 }}
          id='input-search-header'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Search'
          startAdornment={
            <InputAdornment position='start'>
              <IconSearch stroke={1.5} size='1rem' color={'#9e9e9e'} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position='end'>
              <ButtonBase sx={{ borderRadius: '12px' }}>
                <HeaderAvatarStyle variant='rounded'>
                  <IconAdjustmentsHorizontal stroke={1.5} size='1.3rem' />
                </HeaderAvatarStyle>
              </ButtonBase>
            </InputAdornment>
          }
          aria-describedby='search-helper-text'
          inputProps={{ 'aria-label': 'weight' }}
        />
      </Box>
    </>
  )
}

export default SearchSection
