import axios from 'axios'
/**
 *
 * @description axios初始化
 */
const service = axios.create({})
/**
 *
 * @description axios请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 *
 * @description axios响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    const { data } = response
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
