import { MENUS, ROLES, RouteType } from '@/utils/enum'
import type { IMenu } from '@/utils/types'

import { Folder, Avatar, InfoFilled, Comment, Discount, Service } from '@element-plus/icons-vue'
import { projectMenus } from './projectMenus'
import { vendorMenus } from './vendorMenus'
import { roleMenus } from './roleMenus'

const menuTabs = (): IMenu[] => {
  return [
    {
      label: 'User',
      icon: Avatar,
      type: MENUS.USER,
      active: false,
      selected: false,
      route: RouteType.USERS,
      roles: [ROLES.ADMIN, ROLES.ROOT, ROLES.VENDOR],
      params: null,
      childrens: [],
    },
    {
      label: 'Admin',
      icon: Discount,
      active: false,
      selected: false,
      type: MENUS.ADMIN,
      route: RouteType.ADMIN,
      roles: [ROLES.ADMIN, ROLES.ROOT],
      params: null,
      childrens: [],
    },
    {
      label: 'Projects',
      icon: Folder,
      type: MENUS.PROJECTS,
      selected: false,
      active: false,
      route: RouteType.PROJECTS,
      roles: [ROLES.USER],
      params: null,
      childrens: projectMenus(),
    },
    {
      label: 'Vendors',
      icon: InfoFilled,
      selected: false,
      active: false,
      type: MENUS.VENDORS,
      route: RouteType.VENDORS,
      roles: [ROLES.VENDOR],
      params: null,
      childrens: vendorMenus(),
    },
    {
      label: 'Roles',
      icon: Service,
      selected: false,
      active: false,
      type: MENUS.ROLES,
      params: null,
      route: RouteType.ROLES,
      roles: [ROLES.ADMIN, ROLES.ROOT],
      childrens: roleMenus(),
    },
    {
      label: 'Logs',
      icon: Comment,
      selected: false,
      active: false,
      type: MENUS.LOGS,
      roles: [ROLES.ADMIN, ROLES.ROOT, ROLES.VENDOR, ROLES.USER],
      route: RouteType.LOGS,
      params: null,
      childrens: [],
    },
  ]
}

export default menuTabs
