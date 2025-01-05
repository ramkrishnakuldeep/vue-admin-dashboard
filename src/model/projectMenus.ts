import { MENUS, ROLES, RouteType } from '@/utils/enum'
import type { IMenu } from '@/utils/types'
import { Position, Odometer, ChatSquare, PieChart } from '@element-plus/icons-vue'

export const projectMenus = (): IMenu[] => {
  return [
    {
      label: 'Telegram',
      icon: Position,
      type: MENUS.PROJECT_TELEGRAM,
      active: false,
      selected: false,
      route: RouteType.PROJECTS,
      params: { project: MENUS.PROJECT_TELEGRAM },
      roles: [ROLES.USER],
      childrens: [],
    },
    {
      label: 'Chat',
      icon: ChatSquare,
      active: false,
      selected: false,
      type: MENUS.PROJECT_CHAT,
      route: RouteType.PROJECTS,
      params: { project: MENUS.PROJECT_CHAT },
      roles: [ROLES.USER],
      childrens: [],
    },
    {
      label: 'Odometer',
      icon: Odometer,
      active: false,
      selected: false,
      type: MENUS.PROJECT_ODOMETER,
      params: { project: MENUS.PROJECT_ODOMETER },
      route: RouteType.PROJECTS,
      roles: [ROLES.USER],
      childrens: [],
    },
    {
      label: 'Piechart',
      icon: PieChart,
      active: false,
      selected: false,
      type: MENUS.PROJECT_PIECHART,
      route: RouteType.PROJECTS,
      roles: [ROLES.USER],
      params: { project: MENUS.PROJECT_PIECHART },
      childrens: [],
    },
  ]
}
