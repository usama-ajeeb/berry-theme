import PropTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

// project imports
import config from 'config'

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme()
  const [selected, setSelected] = useState(null)

  const handleClick = () => {
    setSelected(!selected ? item.id : null)
  }
  console.log(selected)
  const Icon = item.icon
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size='1.3rem' />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: 6,

        height: 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  )

  let itemTarget = '_self'
  if (item.target) {
    itemTarget = '_blank'
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link
        ref={ref}
        {...props}
        to={`${config.basename}${item.url}`}
        target={itemTarget}
      />
    )),
  }
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget }
  }

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `${12}px`,
        ':hover': {
          backgroundColor: 'rgb(237, 231, 246)',
        },
        background: `${selected === item.id ? 'rgb(237, 231, 246)' : 'white'}`,
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      // selected={selected === item.id}
      // selected={menuItemlist.findIndex((id) => id === item.id)}
      onClick={handleClick}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>
        {itemIcon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant='h7'
            fontSize='14px'
            fontWeight={selected ? '600' : '400'}
            color={selected ? 'black' : 'rgb(97, 97, 97)'}
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant='caption'
              sx={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                color: theme.darkTextSecondary,
                textTransform: 'capitalize',
              }}
              display='block'
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  )
}

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
}

export default NavItem
