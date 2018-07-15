const express = require('express')

var server = express()

server.use('/', function () {
    console.log('aaa')
})

server.listen(8080)