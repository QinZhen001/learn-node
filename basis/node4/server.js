const http = require('http')
const queryString = require('querystring')

http.createServer(function (req, res) {
    //POST——req
    var str = ''

    var i = 0
    //data——有一段数据到达(很多次)
    req.on('data', function (data) {
        console.log(`第${i}次收到数据`)
        i++
        str += data
    })
    //end——数据全部到达(一次)
    req.on('end', function () {
        console.log(str)
    })


}).listen(8080)