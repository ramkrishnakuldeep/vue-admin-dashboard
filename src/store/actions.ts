import type { MENUS, ROLES } from '@/utils/enum'
import type { permissions, User } from '@/utils/types'

export default {
  ADD_NEW_USER: async ({ commit }: any, payload: User) => {
    commit('ADD_USER', payload)
  },
  UPDATE_USER: async ({ commit }: any, payload: User) => {
    commit('UPDATE_USER', payload)
  },
  SET_ROLE: async ({ commit }: any, payload: { role: ROLES; data: Record<MENUS, permissions> }) => {
    commit('UPDATE_ROLE', payload)
  },
  SET_MENUS: async ({ commit }: any, payload: ROLES) => {
    commit('UPDATE_MENUS', payload)
  },
  SET_USER: async ({ commit }: any, payload: User) => {
    commit('SET_USER', payload)
  },
}
