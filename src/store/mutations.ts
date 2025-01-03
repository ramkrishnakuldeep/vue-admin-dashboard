import type { MENUS } from '@/utils/enum'
import type { User } from '@/utils/types'

export default {
  API_REQUEST: (state: any) => {
    state.loading = true
  },
  API_ERROR: (state: any) => {
    state.loading = false
  },
  UPDATE_PERMISSIONS: (state: any, payload: MENUS[]) => {
    state.menuPermissions = payload
  },
  ADD_USER: (state: any, payload: User) => {
    state.users.push(payload)
  },
  UPDATE_USER: (state: any, payload: User) => {
    for (let index = 0; index < state.users.length; index++) {
      if (state.users[index].id === payload.id) {
        state.users[index] = payload
      }
    }
  },
}
