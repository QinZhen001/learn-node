const http = require('http')
const queryString = require('basis/node3/queryString')

http.createServer(function (req, res) {
    var GET = {},
        url;

    if (req.url.indexOf('?') !== -1) {
        var arr = req.url.split('?')
        url = arr[0]

        GET = queryString.parse(arr[1])

        // console.log(queryString.parse(req.url))
    } else {
        url = req.url
    }
    console.log(url, GET)
    res.end()
}).listen(8080)