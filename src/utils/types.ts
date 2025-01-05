import type { Component } from 'vue'
import type { MENUS, ROLES, RouteType } from './enum'

export interface permissions {
  read: boolean
  edit: boolean
  create: boolean
  delete: boolean
}

export interface IMenu {
  label: string
  icon: Component
  type: MENUS
  active: boolean
  childrens: IMenu[]
  roles: ROLES[]
  params: object | null
  route: RouteType
  selected: boolean
}

export interface User {
  username: string
  password: string
  roles: ROLES[]
  id: string
}

export interface State {
  loading: boolean
  users: User[]
  rolePermissions: Record<ROLES, Record<MENUS, permissions>>
  userInfo: User
  menus: IMenu[]
}
