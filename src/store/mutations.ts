import type { MENUS, ROLES } from '@/utils/enum'
import { getMenus, getPermissions } from '@/utils/func'
import type { IPermissions, IState, IUser } from '@/utils/interface'

export default {
  API_REQUEST: (state: IState) => {
    state.loading = true
  },
  API_ERROR: (state: IState) => {
    state.loading = false
  },
  ADD_USER: (state: IState, payload: IUser) => {
    state.users.push(payload)
  },
  UPDATE_ROLE_PERMISSION: (
    state: IState,
    payload: { role: ROLES; data: Record<MENUS, IPermissions> },
  ) => {
    state.rolePermissions[payload.role] = payload.data
    if (state.userInfo.roles.includes(payload.role)) {
      state.menus = getMenus({ permissions: state.rolePermissions, roles: [payload.role] })
    }
  },
  SET_USER: (state: IState, payload: IUser) => {
    const permissions = getPermissions({
      permissions: state.rolePermissions,
      roles: payload.roles,
    })
    state.userInfo = { ...payload, permissions }
  },
  UPDATE_MENUS: (state: IState, payload: ROLES[]) => {
    state.menus = getMenus({ permissions: state.rolePermissions, roles: payload })
  },
  UPDATE_USER: (state: IState, payload: IUser) => {
    for (let index = 0; index < state.users.length; index++) {
      if (state.users[index].id === payload.id) {
        state.users[index] = payload
      }
    }
    console.log('payload.roles ', payload.roles)
    console.log('payload.username ', payload.username)
    console.log('paylstate.userInfo.username ', state.userInfo.username)

    if (payload.username === state.userInfo.username) {
      state.menus = getMenus({ permissions: state.rolePermissions, roles: payload.roles })
      state.userInfo.permissions = getPermissions({
        permissions: state.rolePermissions,
        roles: payload.roles,
      })
    }
  },
}
