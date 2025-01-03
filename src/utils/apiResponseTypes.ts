enum API_STATUS_CODE {
  SUCCESS = 0,
}
export interface LoginResponse {
  code: API_STATUS_CODE
  data: unknown
}
