import { MENUS, RouteType } from '@/utils/enum'
import type { IMenu } from '@/utils/types'

import { Folder, Lock, Avatar, InfoFilled, Comment, Discount } from '@element-plus/icons-vue'
import { projectMenus } from './projectMenus'
import { vendorMenus } from './vendorMenus'

export const menuTabs = (): IMenu[] => {
  return [
    {
      label: 'User',
      icon: Avatar,
      type: MENUS.USER,
      active: false,
      selected: false,
      route: RouteType.USERS,
      childrens: [],
    },
    {
      label: 'Admin',
      icon: Discount,
      active: false,
      selected: false,
      type: MENUS.ADMIN,
      route: RouteType.ADMIN,
      childrens: [],
    },
    {
      label: 'Projects',
      icon: Folder,
      type: MENUS.PROJECTS,
      selected: false,
      active: false,
      route: RouteType.PROJECTS,
      childrens: projectMenus(),
    },
    {
      label: 'Permissions',
      icon: Lock,
      active: false,
      selected: false,
      type: MENUS.PERMISSIONS,
      route: RouteType.PERMISSIONS,
      childrens: [],
    },
    {
      label: 'Vendors',
      icon: InfoFilled,
      selected: false,
      active: false,
      type: MENUS.VENDORS,
      route: RouteType.VENDORS,
      childrens: vendorMenus(),
    },
    {
      label: 'Logs',
      icon: Comment,
      selected: false,
      active: false,
      type: MENUS.LOGS,
      route: RouteType.LOGS,
      childrens: [],
    },
  ]
}
