const http = require('http')
const Koa = require('koa')
const app = new Koa()
http.createServer(app.callback()).listen(3000)