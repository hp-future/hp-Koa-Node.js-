const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = '1111'
})

app.listen('3000', () => {
  console.log('running...')
})