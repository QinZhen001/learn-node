const http = require('http')
const fs = require('fs')
const queryString = require('querystring')
const urlLib = require('url')

var users = {}

var server = http.createServer(function (req, res) {
    //解析数据
    var str = ''
    req.on('data', function (data) {
        str += data
    })
    req.on('end', function () {
        var obj = urlLib.parse(req.url, true)

        const url = obj.pathname
        const GET = obj.query
        const POST = queryString.parse(str)

        console.log(obj)


        // 区分接口，文件
        // if (url === '/user') {
        //     switch (GET.act) {
        //         case 'reg':
        //             //检查用户是否已经存在
        //             if (users[GET.user]) {
        //                 res.write('{"ok":false,"msg":"此用户已经存在"}')
        //             } else {
        //                 //插入users
        //                 users[GET.user] = GET.pass
        //                 res.write('{"ok":false,"msg":"注册成功"}')
        //             }
        //             break;
        //         case 'login':
        //             //检查用户是否存在
        //             if (users[GET.user] == null) {
        //                 res.write('{"ok": false, "msg": "此用户不存在"}');
        //             } else if (users[GET.user] !== GET.pass) {
        //                 res.write('{"ok": false, "msg": "用户名或密码有误"}');
        //             } else {
        //                 res.write('{"ok": true, "msg": "登录成功"}');
        //             }
        //             break
        //         default:
        //             res.write('{"ok": false, "msg": "未知的act"}');
        //             break
        //     }
        //
        // } else {
        //     //读取文件
        //     var file_name = './www' + url
        //     fs.readFile(file_name, function (err, data) {
        //         if (err) {
        //             res.write('404')
        //         } else {
        //             res.write(data)
        //         }
        //     })
        // }

        res.end()
    })
})


server.listen(8080)