import { CssBaseline, StyledEngineProvider } from '@mui/material'

// routing
import Routes from 'routes'

// project imports
import NavigationScroll from './components/extended/NavigationScroll'

// ==============================|| APP ||============================== //

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <NavigationScroll>
        <Routes />
      </NavigationScroll>
    </StyledEngineProvider>
  )
}

export default App
