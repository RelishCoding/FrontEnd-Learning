import express from 'express'

const app = express()

// 设置静态资源目录
app.use(express.static('src'))
app.listen(7070)