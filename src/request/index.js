const Koa = require('koa')
const fs = require('fs')

const app = new Koa()

function render () {
  const filePath = './page/index.html'
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if(err){
        reject()
      }else {
        resolve(data)
      }
    })
  })
}


app.use(async ctx => {
  const html = await render()
  ctx.body = html
})

app.listen('3000', () => {
  console.log('running...')
})