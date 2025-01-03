import type { Component } from 'vue'
import type {
  ASIA_MENUS,
  EUROPE_MENUS,
  MENUS,
  PROJECT_MENUS,
  ROLES,
  RouteType,
  VENDOR_MENUS,
} from './enum'

export interface IMenu {
  label: string
  icon: Component
  type: MENUS | PROJECT_MENUS | ASIA_MENUS | EUROPE_MENUS | VENDOR_MENUS
  active: boolean
  childrens: IMenu[]
  route: RouteType
  selected: boolean
}

export interface User {
  username: string
  password: string
  role: ROLES
  id: string
}
