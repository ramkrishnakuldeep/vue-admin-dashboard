import { ASIA_MENUS, EUROPE_MENUS, RouteType, VENDOR_MENUS } from '@/utils/enum'
import type { IMenu } from '@/utils/types'
import {
  Compass,
  HomeFilled,
  UploadFilled,
  Menu,
  Grid,
  Histogram,
  StarFilled,
  FullScreen,
} from '@element-plus/icons-vue'

export const asiaMenus = () => {
  return [
    {
      label: 'India',
      icon: HomeFilled,
      active: false,
      selected: false,
      type: ASIA_MENUS.VENDOR_INDIA,
      childrens: [],
      route: RouteType.VENDORS,
    },
    {
      label: 'Taiwan',
      icon: UploadFilled,
      active: false,
      selected: false,
      type: ASIA_MENUS.VENDOR_TAIWAN,
      childrens: [],
      route: RouteType.VENDORS,
    },
    {
      label: 'Japan',
      icon: StarFilled,
      active: false,
      selected: false,
      type: ASIA_MENUS.VENDOR_JAPAN,
      childrens: [],
      route: RouteType.VENDORS,
    },
  ]
}

export const europeMenus = () => {
  return [
    {
      label: 'Germany',
      icon: Grid,
      active: false,
      selected: false,
      type: EUROPE_MENUS.VENDOR_GERMANY,
      childrens: [],
      route: RouteType.VENDORS,
    },
    {
      label: 'UK',
      icon: Histogram,
      active: false,
      selected: false,
      type: EUROPE_MENUS.VENDOR_UK,
      childrens: [],
      route: RouteType.VENDORS,
    },
  ]
}

export const vendorMenus = (): IMenu[] => {
  return [
    {
      label: 'Asia',
      icon: Compass,
      active: false,
      selected: false,
      type: VENDOR_MENUS.VENDOR_ASIA,
      route: RouteType.VENDORS,
      childrens: asiaMenus(),
    },
    {
      label: 'Europe',
      icon: Menu,
      active: false,
      selected: false,
      type: VENDOR_MENUS.VENDOR_EUROPE,
      childrens: europeMenus(),
      route: RouteType.VENDORS,
    },
    {
      label: 'America',
      icon: FullScreen,
      active: false,
      selected: false,
      type: VENDOR_MENUS.VENDOR_AMERICA,
      childrens: [],
      route: RouteType.VENDORS,
    },
  ]
}
