const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
var bodyParser = require('koa-bodyparser');

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="myName" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.myName || '',
        password = ctx.request.body.password || '';

    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
             <p><a href="/">Try again</a></p>`;
    }
})


app.use(bodyParser());
app.use(router.routes())
app.listen(8080)
console.log('app started at port 8080...')