const Koa = require('koa')
const db = require('mysql')

const app = new Koa()

const option = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'user'
}

const pool = mysql.createPool(option)


app.listen('3000', () => {
  console.log('running...')
})