const express = require('express')
const cookieParser = require('cookie-parser')

const SCRECT = 'wesdfw4r34tf'


var server = express()
server.use(cookieParser(SCRECT))

server.use('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    req.secret = SCRECT
    res.cookie('user', 'myasd', {signed: true})

    console.log('签名的cookie ' + JSON.stringify(req.signedCookies))
    console.log('无签名的cookie ' + JSON.stringify(req.cookies))

    res.send('ok')
})


server.listen(8080)