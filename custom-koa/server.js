const Woa = require('./application')
const app = new Woa()

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

app.use(async (ctx, next) => {
        ctx.body = '1'
        await next()
        ctx.body += '2'
    }
)
app.use(async (ctx, next) => {
    ctx.body += '3'
    await delay()
    await next()
    ctx.body += '4'
})
app.use(async (ctx, next) => {
    ctx.body += '5'
})

app.listen(9092, () => {
    console.log('server runing on port 9092')
})