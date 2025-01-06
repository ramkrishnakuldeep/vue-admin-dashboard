import { MENUS, RouteType } from '@/utils/enum'
import type { IMenu } from '@/utils/interface'

import {
  Folder,
  Avatar,
  InfoFilled,
  Comment,
  Discount,
  Service,
  Rank,
} from '@element-plus/icons-vue'
import { projectMenus } from './projectMenus'
import { vendorMenus } from './vendorMenus'
import { permissionMenus } from './permissionMenus'

const menuTabs = (): IMenu[] => {
  return [
    {
      label: 'User',
      icon: Avatar,
      type: MENUS.USER,
      active: false,
      selected: false,
      route: RouteType.USERS,
      params: undefined,
      childrens: [],
    },
    {
      label: 'Admin',
      icon: Discount,
      active: false,
      selected: false,
      type: MENUS.ADMIN,
      route: RouteType.ADMIN,
      params: undefined,
      childrens: [],
    },
    {
      label: 'Projects',
      icon: Folder,
      type: MENUS.PROJECTS,
      selected: false,
      active: false,
      route: RouteType.PROJECTS,
      params: undefined,
      childrens: projectMenus(),
    },
    {
      label: 'Vendors',
      icon: InfoFilled,
      selected: false,
      active: false,
      type: MENUS.VENDORS,
      route: RouteType.VENDORS,
      params: undefined,
      childrens: vendorMenus(),
    },
    {
      label: 'Roles',
      icon: Rank,
      selected: false,
      active: false,
      type: MENUS.ROLES,
      params: undefined,
      route: RouteType.ROLES,
      childrens: [],
    },
    {
      label: 'Permissions',
      icon: Service,
      selected: false,
      active: false,
      type: MENUS.PERMISSIONS,
      params: undefined,
      route: RouteType.PERMISSIONS,
      childrens: permissionMenus(),
    },
    {
      label: 'Logs',
      icon: Comment,
      selected: false,
      active: false,
      type: MENUS.LOGS,
      route: RouteType.LOGS,
      params: undefined,
      childrens: [],
    },
  ]
}

export default menuTabs
