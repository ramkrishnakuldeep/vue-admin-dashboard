import { MENUS, RouteType } from '@/utils/enum'
import type { IMenu } from '@/utils/interface'
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

export const asiaMenus = (): IMenu[] => {
  return [
    {
      label: 'India',
      icon: HomeFilled,
      active: false,
      selected: false,
      type: MENUS.VENDOR_INDIA,
      childrens: [],
      params: { vendor: MENUS.VENDOR_INDIA },
      route: RouteType.VENDORS,
    },
    {
      label: 'Taiwan',
      icon: UploadFilled,
      active: false,
      selected: false,
      type: MENUS.VENDOR_TAIWAN,
      childrens: [],
      params: { vendor: MENUS.VENDOR_TAIWAN },
      route: RouteType.VENDORS,
    },
    {
      label: 'Japan',
      icon: StarFilled,
      active: false,
      selected: false,
      type: MENUS.VENDOR_JAPAN,
      params: { vendor: MENUS.VENDOR_JAPAN },
      childrens: [],
      route: RouteType.VENDORS,
    },
  ]
}

export const europeMenus = (): IMenu[] => {
  return [
    {
      label: 'Germany',
      icon: Grid,
      active: false,
      selected: false,
      type: MENUS.VENDOR_GERMANY,
      childrens: [],
      params: { vendor: MENUS.VENDOR_GERMANY },
      route: RouteType.VENDORS,
    },
    {
      label: 'UK',
      icon: Histogram,
      active: false,
      selected: false,
      type: MENUS.VENDOR_UK,
      params: { vendor: MENUS.VENDOR_UK },
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
      type: MENUS.VENDOR_ASIA,
      route: RouteType.VENDORS,
      params: undefined,
      childrens: asiaMenus(),
    },
    {
      label: 'Europe',
      icon: Menu,
      active: false,
      selected: false,
      type: MENUS.VENDOR_EUROPE,
      params: undefined,
      childrens: europeMenus(),
      route: RouteType.VENDORS,
    },
    {
      label: 'America',
      icon: FullScreen,
      active: false,
      selected: false,
      type: MENUS.VENDOR_AMERICA,
      params: { vendor: MENUS.VENDOR_AMERICA },
      childrens: [],
      route: RouteType.VENDORS,
    },
  ]
}
