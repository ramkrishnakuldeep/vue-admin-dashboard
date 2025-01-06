import { MENUS, ROLES, RouteType } from '@/utils/enum'
import type { IMenu } from '@/utils/interface'
import { Position, Odometer, ChatSquare, PieChart } from '@element-plus/icons-vue'

export const permissionMenus = (): IMenu[] => {
  return [
    {
      label: 'Admin',
      icon: Position,
      type: MENUS.ROLE_ADMIN,
      active: false,
      selected: false,
      params: { role: ROLES.ADMIN },
      route: RouteType.PERMISSIONS,
      childrens: [],
    },
    {
      label: 'Root',
      icon: ChatSquare,
      active: false,
      selected: false,
      type: MENUS.ROLE_ROOT,
      params: { role: ROLES.ROOT },
      route: RouteType.PERMISSIONS,
      childrens: [],
    },
    {
      label: 'User',
      icon: Odometer,
      active: false,
      selected: false,
      type: MENUS.ROLE_USER,
      params: { role: ROLES.USER },
      route: RouteType.PERMISSIONS,
      childrens: [],
    },
    {
      label: 'Vendor',
      icon: PieChart,
      active: false,
      selected: false,
      type: MENUS.ROLE_VENDOR,
      params: { role: ROLES.VENDOR },
      route: RouteType.PERMISSIONS,
      childrens: [],
    },
  ]
}
