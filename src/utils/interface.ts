import type { Component } from 'vue'
import type { MENUS, ROLES, RouteType } from './enum'
import type { RouteParamsRawGeneric } from 'vue-router'

export interface IPermissions {
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
  params: RouteParamsRawGeneric | undefined
  route: RouteType
  selected: boolean
}

export interface IUser {
  username: string
  password: string
  id: string
  roles: ROLES[]
}

export interface IUserInfo extends IUser {
  permissions: Record<MENUS, IPermissions>
}

export interface IState {
  loading: boolean
  users: IUser[]
  rolePermissions: Record<ROLES, Record<MENUS, IPermissions>>
  userInfo: IUserInfo
  menus: IMenu[]
}
