import axios from 'axios'
import { getUserToken } from "@/utils/userInfo.js";

const service = axios.create({
  timeout: 10000, // request timeout
  headers: {'Content-Type': 'application/json'}
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = getUserToken()
    // 如果有token 就携带tokon
    if (token) {
      config.headers['access_token'] = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
      return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
