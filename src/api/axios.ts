import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";
import qs from "qs";
import { message as Message } from 'ant-design-vue'

export const createAxiosByInterceptors = (config: AxiosRequestConfig):AxiosInstance => {
  const instance = axios.create({
    // baseURL: "http://localhost:8888",
    timeout: 5000,
    withCredentials: true,
    ... config
  })
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // if(config.method == "post") {
        //     config.data = qs.stringify(config.data)
        // }
      return config;
    },(error: AxiosError) => {
      Message.error(error.message)
      return Promise.reject(error)
    })
  instance.interceptors.response.use((response:AxiosResponse)=> {
    const {code, message} = response.data
    if(code == 200){
      return response.data
    } else {
      Message.error(message)
      return Promise.reject(new Error(message))
    }
  },(error:AxiosError) => {
    // 处理 HTTP 网络错误
    let message = ''
    // HTTP 状态码
    const status = error.response?.status
    switch (status) {
      case 401:
        message = 'token 失效，请重新登录'
        // 这里可以触发退出的 action
        break;
      case 403:
        message = '拒绝访问'
        break;
      case 404:
        message = '请求地址错误'
        break;
      case 500:
        message = '服务器故障'
        break;
      default:
        message = '网络连接故障'
      }
    Message.error(message) 
    return Promise.reject(error)
  })
  return instance
}