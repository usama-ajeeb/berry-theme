import PropTypes from 'prop-types'

// material-ui
import { styled } from '@mui/material/styles'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  linearProgressClasses,
} from '@mui/material'

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined'

// styles
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#fff',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#2196f3',
  },
}))

const CardStyle = styled(Card)(({ theme }) => ({
  background: '#e3f2fd',
  marginBottom: '22px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '157px',
    height: '157px',
    background: '#90caf9',
    borderRadius: '50%',
    top: '-105px',
    right: '-96px',
  },
}))

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
  //   const theme = useTheme()

  return (
    <Grid container direction='column' spacing={1} sx={{ mt: 1.5 }}>
      <Grid item>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Typography variant='h6' sx={{ color: '#1565C8' }}>
              Progress
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' color='inherit'>{`${Math.round(
              value
            )}%`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <BorderLinearProgress variant='determinate' value={value} {...others} />
      </Grid>
    </Grid>
  )
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number,
}

// ==============================|| SIDEBAR MENU Card ||============================== //

const MenuCard = () => {
  return (
    <CardStyle>
      <CardContent sx={{ p: 2 }}>
        <List sx={{ p: 0, m: 0 }}>
          <ListItem alignItems='flex-start' disableGutters sx={{ p: 0 }}>
            <ListItemAvatar sx={{ mt: 0 }}>
              <Avatar
                variant='rounded'
                sx={{
                  cursor: 'pointer',
                  borderRadius: '8px',
                  width: '44px',
                  height: '44px',
                  fontSize: '1.5rem',
                  color: '#2196f3',
                  border: 'none',
                  borderColor: '#2196f3',
                  background: '#fff',
                  marginRight: '12px',
                }}
              >
                <TableChartOutlinedIcon fontSize='inherit' />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ mt: 0 }}
              primary={
                <Typography variant='subtitle1' sx={{ color: '#1565c0' }}>
                  Get Extra Space
                </Typography>
              }
              secondary={<Typography variant='caption'> 28/23 GB</Typography>}
            />
          </ListItem>
        </List>
        <LinearProgressWithLabel value={80} />
      </CardContent>
    </CardStyle>
  )
}

export default MenuCard
