const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

var server = express()

server.use(cookieParser())
server.use(cookieSession({
    name: 'sess',
    keys: ['aaa', 'ccc', 'ddd',],
    maxAge: 2 * 3600 * 1000
}))

server.use('/', function (req, res) {
    if (req.session['count'] == null) {
        req.session['count'] = 1
    } else {
        req.session['count']++
    }

    console.log(req.session['count'])
    res.send('ok')
})

server.listen(8080)