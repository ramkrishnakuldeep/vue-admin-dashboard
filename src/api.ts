import axios from 'axios'
import store from '@/store'
import * as sha512 from 'js-sha512'
import type { LoginParam } from '@/utils/apiRequestTypes'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
})

http.interceptors.request.use((config) => {
  const extendSession = config.url?.includes('extendSession')
  const getTourneyByGID = config.url?.includes('getTourneyByGID')
  const getCompleteItems = config.url?.includes('getCompleteItems')
  if (extendSession || getTourneyByGID || getCompleteItems) {
    console.log('no loading')
  } else {
    store.commit('API_REQUEST')
  }
  return config
})

http.interceptors.response.use(
  (res: any) => {
    store.commit('API_SUCCESS', false)
    if (res.data.errCode && res.data.errCode !== 0) {
      return Promise.reject(res)
    } else {
      return Promise.resolve(res)
    }
  },
  (err) => {
    store.commit('API_ERROR', err)
    return Promise.reject(err)
  },
)

export default {
  doLogin: async (param: LoginParam) => {
    const { username, password } = param
    const loginParam = new FormData()
    loginParam.append('username', username.toString())
    loginParam.append('password', sha512.sha512(password.toString()).toString())
    const loginURL = `mem/login.php?${Math.random()}`
    return await http.post(loginURL, loginParam)
  },
}
