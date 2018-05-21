const express = require('express')
const cookieParser = require('cookie-parser')

const SERECT = 'wesdfw4r34tf'

var server = express()

//cookie
server.use(cookieParser(SERECT))

server.use('/', function (req, res) {
    res.clearCookie('user')
    res.send('ok')
})

server.listen(8080)