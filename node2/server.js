const http = require('http')
const fs = require('fs')

var server = http.createServer(function (req, res) {
    //req.url => '/index.html'
    //读取=>'./www/index.html'
    var file_name = './www' + req.url

    if (req.url === '/bbb.txt') {
        fs.writeFile('./www/bbb.txt', 'abcdefg', function (err) {
            console.log(err)
        })
    }


    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.write('404')
        } else {
            res.write(data)
        }
        res.end()
    })


})


server.listen(8080)