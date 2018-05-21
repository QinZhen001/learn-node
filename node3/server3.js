const http = require('http')
const urlLib = require('url')

http.createServer(function (req, res) {
    var obj = urlLib.parse(req.url)
    // console.log(obj)

    var url = obj.pathname
    var GET = obj.query

   console.log(url, GET)

    res.end()

}).listen(8080)