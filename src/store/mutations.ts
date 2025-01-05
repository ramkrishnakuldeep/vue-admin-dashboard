import type { MENUS, ROLES } from '@/utils/enum'
import { getMenus } from '@/utils/func'
import type { permissions, State, User } from '@/utils/types'

export default {
  API_REQUEST: (state: State) => {
    state.loading = true
  },
  API_ERROR: (state: State) => {
    state.loading = false
  },
  ADD_USER: (state: State, payload: User) => {
    state.users.push(payload)
  },
  UPDATE_ROLE: (state: State, payload: { role: ROLES; data: Record<MENUS, permissions> }) => {
    state.rolePermissions[payload.role] = payload.data
    state.menus = getMenus({ permissions: state.rolePermissions, roles: [payload.role] })
  },
  SET_USER: (state: State, payload: User) => {
    state.userInfo = payload
  },
  UPDATE_MENUS: (state: State, payload: ROLES[]) => {
    state.menus = getMenus({ permissions: state.rolePermissions, roles: payload })
  },
  UPDATE_USER: (state: State, payload: User) => {
    for (let index = 0; index < state.users.length; index++) {
      if (state.users[index].id === payload.id) {
        state.users[index] = payload
      }
    }
    state.menus = getMenus({ permissions: state.rolePermissions, roles: payload.roles })
  },
}
