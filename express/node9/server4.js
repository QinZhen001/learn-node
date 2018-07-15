const express = require('express')
const queryString = require('querystring')
const bodyParser = require('body-parser')

var server = express()
server.listen(8080)

// server.use(function (req, res, next) {
//     var str = ''
//     req.on('data', function (data) {
//         str += data
//     })
//     req.on('end', function () {
//         req.body = queryString.parse(str)
//         next()
//     })
//
// })

server.use(bodyParser.urlencoded({extended:false}))


server.use('/', function (req, res) {
    console.log(req.body)
    res.end()
})