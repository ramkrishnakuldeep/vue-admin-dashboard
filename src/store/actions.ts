import type { MENUS, ROLES } from '@/utils/enum'
import type { IPermissions, IUser } from '@/utils/interface'

export default {
  ADD_NEW_USER: async ({ commit }: any, payload: IUser) => {
    commit('ADD_USER', payload)
  },
  UPDATE_USER: async ({ commit }: any, payload: IUser) => {
    commit('UPDATE_USER', payload)
  },
  SET_ROLE_PERMISSION: async (
    { commit }: any,
    payload: { role: ROLES; data: Record<MENUS, IPermissions> },
  ) => {
    commit('UPDATE_ROLE_PERMISSION', payload)
  },
  SET_MENUS: async ({ commit }: any, payload: ROLES) => {
    commit('UPDATE_MENUS', payload)
  },
  SET_USER: async ({ commit }: any, payload: IUser) => {
    commit('SET_USER', payload)
  },
}
