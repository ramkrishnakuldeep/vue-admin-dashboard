import { PROJECT_MENUS, RouteType } from '@/utils/enum'
import type { IMenu } from '@/utils/types'
import { Position, Odometer, ChatSquare, PieChart } from '@element-plus/icons-vue'

export const projectMenus = (): IMenu[] => {
  return [
    {
      label: 'Telegram',
      icon: Position,
      type: PROJECT_MENUS.PROJECT_TELEGRAM,
      active: false,
      selected: false,
      route: RouteType.PROJECTS,
      childrens: [],
    },
    {
      label: 'Chat',
      icon: ChatSquare,
      active: false,
      selected: false,
      type: PROJECT_MENUS.PROJECT_CHAT,
      route: RouteType.PROJECTS,
      childrens: [],
    },
    {
      label: 'Odometer',
      icon: Odometer,
      active: false,
      selected: false,
      type: PROJECT_MENUS.PROJECT_ODOMETER,
      route: RouteType.PROJECTS,
      childrens: [],
    },
    {
      label: 'Piechart',
      icon: PieChart,
      active: false,
      selected: false,
      type: PROJECT_MENUS.PROJECT_PIECHART,
      route: RouteType.PROJECTS,
      childrens: [],
    },
  ]
}
