import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

// material-ui
import { styled, useTheme } from '@mui/material/styles'
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material'

// project imports

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    backgroundColor: '#E3F2FD',
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    marginRight: '20px',
    borderRadius: '24px',
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: -(260 - 20),
        width: `calc(100% - ${260}px)`,
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - ${260}px)`,
        padding: '16px',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${260}px)`,
        padding: '16px',
        marginRight: '10px',
      },
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${260}px)`,
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
      },
    }),
  })
)

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme()

  const matchDownMd = useMediaQuery('(max-width:1200px)')

  // Handle left drawer
  const [toggler, setToggler] = useState(true)

  const handleLeftDrawerToggle = () => {
    if (toggler) {
      setToggler(false)
    } else {
      setToggler(true)
    }
  }

  useEffect(() => {
    if (matchDownMd) {
      setToggler(false)
    } else {
      setToggler(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position='fixed'
        color='inherit'
        elevation={0}
        sx={{
          bgcolor: '#fff',
          paddingTop: '16px',
          paddingBottom: '16px',
          // transition: leftDrawerOpened
          transition: toggler
            ? 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
            : 'none',
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Box sx={{ display: toggler ? 'block' : 'none' }}>
        <Sidebar drawerOpen={toggler} drawerToggle={handleLeftDrawerToggle} />
      </Box>

      {/* main content */}
      <Main theme={theme} open={true}>
        <Outlet />
      </Main>
    </Box>
  )
}

export default MainLayout
