import { MENUS, RouteType } from '@/utils/enum'
import type { IMenu } from '@/utils/interface'
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
      childrens: [],
    },
    {
      label: 'Piechart',
      icon: PieChart,
      active: false,
      selected: false,
      type: MENUS.PROJECT_PIECHART,
      route: RouteType.PROJECTS,
      params: { project: MENUS.PROJECT_PIECHART },
      childrens: [],
    },
  ]
}
