import type { MENUS } from '@/utils/enum'
import type { User } from '@/utils/types'

export default {
  SET_PERMISSIONS: async ({ commit }: any, payload: MENUS[]) => {
    commit('UPDATE_PERMISSIONS', payload)
  },
  ADD_NEW_USER: async ({ commit }: any, payload: User) => {
    commit('ADD_USER', payload)
  },
  UPDATE_USER: async ({ commit }: any, payload: User) => {
    console.log('actinn', payload)

    commit('UPDATE_USER', payload)
  },
}
