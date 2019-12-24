import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
// 设置一个常态值
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截
axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理
  // config是要发送请求的配置信息
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token 到headers属性 因为所有接口要求的token格式是一样的
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  // 对响应数据做处理
  return response.data ? response.data : {}
}, function (error) {
  // 对响应错误做处理
  let status = error.response.status // 获取失败的状态码
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '403 refresh_token未携带或已过期'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      message = 'token过期或未出'
      window.localStorage.removeItem('user-token') // 清空缓存
      router.push('/login') // this.$router.push()
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
  //   希望 在异常处理函数中将所有的错误都处理完毕 不再进入catch  终止错误
})
export default axios
