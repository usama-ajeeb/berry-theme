// material-ui
import { Typography } from '@mui/material'

// project imports
import NavGroup from './NavGroup'
// import menuItem from 'menu-items';

import {
  IconDashboard,
  IconKey,
  IconBrandChrome,
  IconHelp,
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
} from '@tabler/icons'

// constant
const icons = {
  IconDashboard,
  IconKey,
  IconBrandChrome,
  IconHelp,
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
}

export const menuItemlist = [
  {
    id: 'dashboard',
    // title: 'Dashboard',
    type: 'group',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: icons.IconDashboard,
        breadcrumbs: false,
      },
    ],
  },
  {
    id: 'pages',
    // title: 'Pages',
    // caption: 'Pages Caption',
    type: 'group',
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: icons.IconKey,

        children: [
          {
            id: 'login3',
            title: 'Login',
            type: 'item',
            url: '/pages/login/login3',
            target: true,
          },
          {
            id: 'register3',
            title: 'Register',
            type: 'item',
            url: '/pages/register/register3',
            target: true,
          },
        ],
      },
    ],
  },
  {
    id: 'utilities',
    // title: 'Utilities',
    type: 'group',
    children: [
      {
        id: 'util-typography',
        title: 'Typography',
        type: 'item',
        url: '/utils/util-typography',
        icon: icons.IconTypography,
        breadcrumbs: false,
      },
      {
        id: 'util-color',
        title: 'Color',
        type: 'item',
        url: '/utils/util-color',
        icon: icons.IconPalette,
        breadcrumbs: false,
      },
      {
        id: 'util-shadow',
        title: 'Shadow',
        type: 'item',
        url: '/utils/util-shadow',
        icon: icons.IconShadow,
        breadcrumbs: false,
      },
      {
        id: 'icons',
        title: 'Icons',
        type: 'collapse',
        icon: icons.IconWindmill,
        children: [
          {
            id: 'tabler-icons',
            title: 'Tabler Icons',
            type: 'item',
            url: '/icons/tabler-icons',
            breadcrumbs: false,
          },
          {
            id: 'material-icons',
            title: 'Material Icons',
            type: 'item',
            url: '/icons/material-icons',
            breadcrumbs: false,
          },
        ],
      },
    ],
  },
  {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        icon: icons.IconBrandChrome,
        breadcrumbs: false,
      },
      {
        id: 'documentation',
        title: 'Documentation',
        type: 'item',
        url: 'https://codedthemes.gitbook.io/berry/',
        icon: icons.IconHelp,
        external: true,
        target: true,
      },
    ],
  },
]

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const navItems = menuItemlist.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />
      default:
        return (
          <Typography key={item.id} variant='h6' color='error' align='center'>
            Menu Items Error
          </Typography>
        )
    }
  })

  return <>{navItems}</>
}

export default MenuList
