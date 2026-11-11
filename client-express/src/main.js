import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

// 创建代理
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080/api', changeOrigin: true }))

// 设置静态资源目录
app.use(express.static('src'))
app.listen(7070)