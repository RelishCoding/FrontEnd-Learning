import axios from 'axios'

// 创建axios实例
const _axios = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
})

// 请求拦截器
_axios.interceptors.request.use(
    function (config) {
        // 比如在这里添加统一的headers
        config.headers = {
            Authorization: 'aaa.bbb.ccc'
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 响应拦截器
_axios.interceptors.response.use(
    function (response) {
        // 2xx范围内走这里
        return response
    },
    function (error) {
        // 超出2xx，比如4xx、5xx走这里
        if (error.response.status === 400) {
            console.log('请求参数不正确')
            return Promise.resolve(400)
        } else if (error.response.status === 401) {
            console.log('跳转至登录页面')
            return Promise.resolve(401)
        } else if (error.response.status === 404) {
            console.log('请求资源不存在')
            return Promise.resolve(404)
        }

        return Promise.reject(error)
    }
)

export default _axios