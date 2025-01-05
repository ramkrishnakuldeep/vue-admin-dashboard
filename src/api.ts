import axios from 'axios'
import store from '@/store'
import type { LoginParam } from '@/utils/apiRequestTypes'

const http = axios.create({
  baseURL: 'http://localhost:5051/api/',
  timeout: 30000,
})

http.interceptors.request.use((config) => {
  store.commit('API_REQUEST')
  return config
})

http.interceptors.response.use(
  (res: any) => {
    store.commit('API_SUCCESS', false)
    return Promise.resolve(res)
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
    loginParam.append('password', password.toString())
    const loginURL = `login?${Math.random()}`
    return await http.post(loginURL, loginParam)
  },
}
