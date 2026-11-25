<!-- axios -->
<template lang="html">
    <div>
        <input type="button" value="获取远程数据" @click="getRemoteData()">
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        methods: {
            async getRemoteData() {
                // const resp = await axios.get('/api/students')

                // 1.演示 get, post
                // const resp = await axios.get('/api/a1')
                // const resp = await axios.post('/api/a2')

                // 2.发送请求头
                /* const resp = await axios.post('api/a3', {}, {
                    headers: {
                        Authorization: 'abc'
                    }
                }) */

                // 3.发送请求时携带查询参数，如 ?name=xxx&age=xxx
                // 方式一拼接字符串
                // const name = 'zhangsan'
                /* const name = encodeURIComponent('&&&')
                const age = 18
                const resp = await axios.post(`/api/a4?name=${name}&age=${age}`) */

                // 方式二使用 params，不想自己拼串、处理特殊字符，就用这种
                /* const resp = await axios.post('/api/a4', {}, {
                    params: {
                        name: '&&&&',
                        age: 20
                    }
                }) */

                // 4. 用请求体发数据，格式为 urlencoded
                /* const params = new URLSearchParams()
                params.append("name", "张三")
                params.append("age", 24)
                const resp = await axios.post('api/a4', params) */

                // 5. 用请求体发数据，格式为 multipart
                /* const params = new FormData()
                params.append("name", "李四")
                params.append("age", 30)
                // const resp = await axios.post('/api/a4', params)
                const resp = await axios.post('/api/a5', params) */

                // 6. 用请求体发数据，格式为 json
                /* const resp = await axios.post('/api/a5json', {
                    name: '王五',
                    age: 50
                }) */

                // 7. 默认配置
                const myAxios = axios.create({
                    baseURL: 'http://localhost:8080',
                    withCredentials: true
                })
                /* const resp = await myAxios.post('/api/a5json', {
                    name: '王五',
                    age: 50
                }) */
                // await myAxios.post('/api/a6set', {})
                // await myAxios.post('/api/a6get', {})

                // 8. 响应格式
                // const resp = await myAxios.get('/api/students')
                /* try {
                    // const resp = await myAxios.get('/api/students2')
                    const resp = await myAxios.post('/api/students')
                    console.log(resp)
                } catch (error) {
                    console.log(error.response)
                } */

                // 9. 拦截器
                // 请求拦截器
                myAxios.interceptors.request.use(
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
                await myAxios.post('/api/a6set')
                await myAxios.post('/api/a6get')

                // 响应拦截器
                myAxios.interceptors.response.use(
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
                await myAxios.post('/api/a6set2')
            }
        }
    }
</script>